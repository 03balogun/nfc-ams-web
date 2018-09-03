<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\TimeTables\Forms\TimeTableForm;
use App\AMS\Modules\TimeTables\Validators\ValidateCreateTimeTable;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class TimeTablesController extends Controller
{
    protected $module_name = 'timetables';
    protected $ams;
    protected $columns = [
        'department_id',
        'course_id',
        'level',
        'day',
        'start_time',
        'end_time',
        'note',
    ];

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
        $form = $formBuilder->create(TimeTableForm::class, [
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
     * @param  ValidateCreateTimeTable  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateTimeTable $request)
    {
        $data = array_only($request->all(), $this->columns );
        $store = $this->ams->timetables()->create($data);
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

    public function getTimeTable($id)
    {
        if ($id) {
            $timetable = $this->ams->timetables()->get($id);
            return response()->json($timetable);
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
        $data = array_only($request->all(), $this->columns);
        $update = $this->ams->timetables()->update($data,$id);
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
        $delete = $this->ams->timetables()->delete($id);
        return response()->json($delete);
    }

    public function timetablesRecords($department = null, $level = null)
    {
        $timetables_model = $this->ams->timetables()->model;
        if ($department && $level){
            $timetables = [];
            foreach (daysOfWeek() as $item => $val){
                $timetables[$item] = $this->getLecturesForDay($timetables_model
                    ->join('courses','time_tables.course_id','=','courses.id')
                    ->where('courses.department_id',$department)
                    ->where('courses.level',$level), $item);
            }
            return view('shared.time_table',compact('timetables'));
        }
        return "No records";

    }

    public function getLecturesForDay($model, $day)
    {
        return $model->where('time_tables.day', '=', $day)->
        with(['course'])
            ->orderBy('start_time')
            ->get()
            ->toArray();
    }
}
