<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Students\Forms\StudentForm;
use App\AMS\Modules\Students\Validators\ValidateCreateStudent;
use App\AMS\Modules\Students\Validators\ValidateUpdateStudent;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class StudentsController extends Controller
{

    protected $ams;
    public $module_name = "students";

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
        $form = $formBuilder->create(StudentForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => [
                'departments' =>
                    $this->ams->departments()->getRecordsArray(['id', 'name'])->data,
                'courses' =>
                    $this->ams->courses()->getRecordsArray(['id', 'title'],
                        ['key' => 'id', 'value' => 'title'])->data
            ]
        ]);
        $all_students = $this->ams->students()->getRecords()->data->count();
        return view($this->module_name . '.index', compact('form', 'all_students'));
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
     * @param  ValidateCreateStudent $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateStudent $request)
    {
        $data = $request->all();
        $courses = $data['courses'];
        $data = array_only($data, ['name', 'gender',
            'registration_num', 'dob', 'department_id', 'created_at']);
        $store = $this->ams->students()->create($data);
        if ($store->status) {
            $course_data = [];
            foreach ($courses as $course) {
                $model = $this->ams->courses()->get($course)->data;
                $course_data[] = [
                    'student_id' => $store->data->id,
                    'course_id' => $model->id,
                    'lecturer_id' => $model->lecturer_id,
                ];
            }
            $create_courses = $this->ams->courses()->createStudentCourses($course_data);
            //if the student course record could not create for some reason, delete the student.
            if (!$create_courses->status) $store->data->delete();
            return response()->json($create_courses);
        }
        return response()->json($store);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(FormBuilder $formBuilder, $id)
    {
        $form = $formBuilder->create(StudentForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => []
        ]);
        $student = $this->ams->students()->get($id);
        return ($student->status && $student->data) ?
            view($this->module_name . '.show', ['student' => $student->data, 'form' => $form])
            : redirect()->route('students.index')->with(errorSession('Record Not Found'));

    }

    public function getStudent($id)
    {
        if ($id) {
            $srecord = $this->ams->students()->model->where('id', $id)->with('courses')->get();
            $student = ($srecord) ? $srecord->first() : [];
            return response()->json(systemResponse()->status(count($student) ? true : false)->data($student));
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
    public function update(ValidateUpdateStudent $request, $id)
    {
        //TODO refactor this code
        $data = $request->all();
        $courses = $data['courses'];
        $data = array_only($data, ['name', 'gender',
            'registration_num', 'dob', 'department_id', 'created_at']);
        $update = $this->ams->students()->update($data, $id);
        if ($update->status) {
            $course_data = [];
            $model = $this->getStudent($id);
            $student_courses = (isset($model->original->data->courses))
                ? $model->original->data->courses : [];
            foreach ($student_courses as $course) {
                $course_data[] = $course->course_id;
            }
            $to_add = array_diff($courses,$course_data);
            $to_delete = array_diff($course_data,$courses);
            if (count($to_delete)){
                foreach ($to_delete as $item){
                    $this->ams->courses()->studentCourses->where('student_id',$id)
                        ->where('course_id',$item)->delete();
                }
            }
            if (count($to_add)){
                $new_courses = [];
                foreach ($to_add as $item){
                    $model = $this->ams->courses()->get($item)->data;
                    $new_courses[] = [
                        'student_id' => $id,
                        'course_id' => $item,
                        'lecturer_id' => $model->lecturer_id,
                    ];
                    $this->ams->courses()->createStudentCourses($new_courses);
                }
            }

        }

        return response()->json($update);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = $this->ams->students()->delete($id);
        return response()->json($delete);
    }
}