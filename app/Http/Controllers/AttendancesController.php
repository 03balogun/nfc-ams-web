<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Attendances\Forms\AttendanceForm;
use App\AMS\Modules\Attendances\Validators\ValidateCreateAttendance;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class AttendancesController extends Controller
{
    protected $module_name = 'attendances';
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
                'lecturers' => $this->ams->lecturers()->getRecordsArray(['id','name'])->data,
                'departments' => $this->ams->departments()->getRecordsArray(['id','name'])->data,
                'courses' => $this->ams->courses()->getRecordsArray(['id','title'],
                    ['key'=>'id','value'=>'title'])->data,
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
     * @param  ValidateCreateAttendance  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateAttendance $request)
    {
        $data = array_only($request->all(), ['name']);
        $store = $this->ams->attendances()->create($data);
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

    public function getAttendance($id)
    {
        if ($id) {
            $attendance = $this->ams->attendances()->get($id);
            return response()->json($attendance);
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
        $data = array_only($request->all(), ['name']);
        $update = $this->ams->attendances()->update($data,$id);
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
        $delete = $this->ams->attendances()->delete($id);
        return response()->json($delete);
    }
}
