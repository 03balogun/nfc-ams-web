<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Courses\Forms\CourseForm;
use App\AMS\Modules\Courses\Validators\ValidateCreateCourse;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class CoursesController extends Controller
{
    protected $module_name = 'courses';
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
        $form = $formBuilder->create(CourseForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => [
                'departments' => $this->ams->departments()->getRecordsArray(['id','name'])->data,
                'lecturers' => $this->ams->lecturers()->getRecordsArray(['id','name'])->data
            ]
        ]);

        return view($this->module_name.'.index', compact('form'));
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
     * @param  ValidateCreateCourse  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateCourse $request)
    {
        $data = array_only($request->all(), ['code','title','unit',
            'level','department_id','lecturer_id']);
        $store = $this->ams->courses()->create($data);
        return response()->json($store);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function getCourse($id)
    {
        if ($id) {
            $course = $this->ams->courses()->get($id);
            return response()->json($course);
        }
        return response()->json(systemResponse()->status(false));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = array_only($request->all(), ['code','title','unit',
            'level','department_id','lecturer_id']);
        $update = $this->ams->courses()->update($data,$id);
        return response()->json($update);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = $this->ams->courses()->delete($id);
        return response()->json($delete);
    }

    public function getCourseStudent($course_id)
    {
        $course_students = $this->ams->courses()->get($course_id,'id',['*'],['students']);
        return response()->json($course_students);
    }
}
