<?php

namespace App\Http\Controllers;

use App\AMS\Ams;

//use App\AMS\Modules\StudentReports\Forms\StudentReportForm;
//use App\AMS\Modules\StudentReports\Validators\ValidateCreateStudentReport;
use App\AMS\Modules\Attendances\Forms\AttendanceForm;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class StudentReportsController extends Controller
{
    protected $module_name = 'student_reports';
    protected $ams;

    public function __construct(Ams $ams)
    {
        $this->ams = $ams;
    }

    /**
     * Display a listing of the resource.
     *
     * @param FormBuilder $formBuilder
     * @return \Illuminate\Http\Response
     */
    public function index(FormBuilder $formBuilder)
    {
        $form = $formBuilder->create(AttendanceForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => [
                'departments' => $this->ams->departments()->getRecordsArray(['id', 'name'])->data,
                'students' => $this->ams->students()->getRecordsArray(['id', 'name'])->data
            ]
        ]);

        return view($this->module_name . '.index', compact('form'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ValidateCreateStudentReport $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateStudentReport $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function getStudentReport($id)
    {
        if ($id) {
            $student_report = $this->ams->student_reports()->get($id);
            return response()->json($student_report);
        }
        return response()->json(systemResponse()->status(false));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }

    public function student_reportRecords($student = null, $date_from = null, $date_to = null)
    {
        $model = $this->ams->attendances()->model->where('student_id', $student);

        $student = $this->ams->students()->get($student)->data;

        if ($date_from && $date_to) $model->whereBetween('date', [$date_from, $date_to]);
        $model->with(['lecturer', 'course']);
        $present = 0;
        $late = 0;
        $absent_excused = 0;
        $absent_unexcused = 0;
        return view('shared.student_record', compact('model',
            'student', 'date_from', 'date_to', 'present', 'late', 'absent_excused', 'absent_unexcused'));
    }

    public function student_reportsVisual($student = null, $date_from = null, $date_to = null)
    {
        try {


            $courses = $this->ams->students()->model
                ->select(['course.id', 'course.title'])
                ->join('student_courses', 'students.id', '=', 'student_courses.student_id')
                ->leftJoin('courses AS course', 'student_courses.course_id', '=', 'course.id')
                ->where('students.id', $student)
                ->get();


            $records = [];

            foreach ($courses as $course) {
                $records[$course->title] = [
                    'present' => $this->ams->attendances()->model->where('student_id', $student)
                        ->where('course_id', $course->id)->where('status', 1)->count(),

                    'late' => $this->ams->attendances()->model->where('student_id', $student)
                        ->where('course_id', $course->id)->where('status', 2)->count(),

                    'absent_excuse' => $this->ams->attendances()->model->where('student_id', $student)
                        ->where('course_id', $course->id)->where('status', 3)->count(),

                    'absent_unexcused' => $this->ams->attendances()->model->where('student_id', $student)
                        ->where('course_id', $course->id)->where('status', 4)->count()
                ];
            }
            return view('shared.student_record_chart', compact('records'));
        } catch (\Exception $e) {
            return view('shared.student_record_chart');
        }
    }
}
