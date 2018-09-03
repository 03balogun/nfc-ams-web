<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class DataTablesController extends Controller
{
    protected $ams;

    public function __construct(Ams $ams)
    {
        $this->ams = $ams;
    }


    public function studentsRecords(Request $request)
    {
        try {
            $module_name = "students";

            $query = array_only($request->all(), ['department_id', 'gender']);
            $columns = ['id', 'name', 'gender', 'registration_num', 'dob', 'department_id', 'created_at'];
            $records = $this->ams->students()->model->select($columns);
            foreach ($query as $item => $value) if ($value != null && $value != 'null') $records->where($item, $value);
            return DataTables::of($records)
                ->editColumn('id', function ($row) use ($module_name) {
                    $html = '';
                    $html .= '<a href=' . route($module_name . '.show', $row->id) . '>#' . $row->id . '</a>';
                    return $html;
                })
                ->editColumn('gender', function ($row) {
                    $html = '';
                    $html .= ($row->gender) ? ucfirst($row->gender) : '--';
                    return $html;
                })
                ->editColumn('registration_num', function ($row) {
                    $html = '';
                    $html .= ($row->registration_num)
                        ? $row->registration_num : '--';
                    return $html;
                })
                ->editColumn('dob', function ($row) {
                    $html = '';
                    $html .= ($row->dob) ? $row->dob : '--';
                    return $html;
                })
                ->addColumn('department', function ($row) {
                    $html = '';
                    $html .= ($row->department) ? $row->department->name : '--';
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
                    return $html;
                })
                ->addColumn('action', function ($row) use ($module_name) {
                    $config = ['edit' => true, 'show' => true, 'delete' => true];
                    $html = view('shared.action_button', compact('module_name', 'row', 'config'));
                    return $html;
                })
                ->escapeColumns([])
                ->make();
        } catch (\Exception $exception) {
            return [];
        }

    }

    public function departmentsRecords()
    {
        try {
            $module_name = "departments";
            $columns = ['id', 'name', 'created_at'];
            $records = $this->ams->departments()->getRecords($columns)->data;
            return DataTables::of($records)
                ->editColumn('name', function ($row) {
                    $html = '';
                    $html .= "<a href=".route('departments.show',$row->id).">$row->name</a>";
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
                    return $html;
                })
                ->addColumn('action', function ($row) use ($module_name) {
                    $config = ['show'=>true,'edit' => true, 'delete' => true];
                    $html = view('shared.action_button', compact('module_name', 'row', 'config'));
                    return $html;
                })
                ->escapeColumns([])
                ->make();
        } catch (\Exception $exception) {
            return [];
        }
    }

    public function lecturersRecords()
    {
        try {
            $module_name = "lecturers";
            $columns = ['id', 'lecturer_id', 'name', 'created_at'];
            $records = $this->ams->lecturers()->getRecords($columns)->data;
            return DataTables::of($records)
                ->editColumn('name', function ($row) {
                    $html = '';
                    $html .= ucwords($row->name);
                    return $html;
                })
                ->editColumn('lecturer_id', function ($row) {
                    $html = '';
                    $route = route('lecturers.show', $row->id);
                    $html .= "<a href='$route'>$row->lecturer_id</a>";
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
                    return $html;
                })
                ->addColumn('action', function ($row) use ($module_name) {
                    $config = ['show' => true, 'edit' => true, 'delete' => true];
                    $html = view('shared.action_button', compact('module_name', 'row', 'config'));
                    return $html;
                })
                ->escapeColumns([])
                ->make();
        } catch (\Exception $exception) {
            return [];
        }
    }


    public function coursesRecords()
    {
        try {
            $module_name = "courses";
            $columns = ['id', 'code', 'title', 'unit', 'level',
                'department_id', 'lecturer_id', 'created_at'];
            $records = $this->ams->courses()->getRecords($columns)->data;
            return DataTables::of($records)
                ->editColumn('name', function ($row) {
                    $html = '';
                    $html .= ucwords($row->name);
                    return $html;
                })
                ->editColumn('lecturer_id', function ($row) {
                    $html = '';
                    $route = route('lecturers.show', $row->id);
                    $name = ($row->lecturer)?$row->lecturer->name:'--';
                    $html .= "<a href='$route'>$name</a>";
                    return $html;
                })
                ->editColumn('department_id', function ($row) {
                    $html = '';
                    $route = route('departments.show', $row->id);
                    $name = ($row->department)?$row->department->name:'--';
                    $html .= "<a href='$route'>$name</a>";
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
                    return $html;
                })
                ->addColumn('action', function ($row) use ($module_name) {
                    $config = ['show' => true, 'edit' => true, 'delete' => true];
                    $html = view('shared.action_button', compact('module_name', 'row', 'config'));
                    return $html;
                })
                ->escapeColumns([])
                ->make();
        } catch (\Exception $exception) {
            return [];
        }
    }

    public function timeTableRecords()
    {
        try {
            $module_name = "timetables";
            $columns = ['id', 'course_id', 'level', 'day', 'start_time','end_time','note', 'created_at'];
            $records = $this->ams->timetables()->getRecords($columns)->data;
            return DataTables::of($records)
                ->addColumn('course_code', function ($row) {
                    $html = '';
                    $html .= ($row->course)?$row->course->code:'--';
                    return $html;
                })
                ->addColumn('course_title', function ($row) {
                    $html = '';
                    $html .= ($row->course)?$row->course->title:'--';
                    return $html;
                })
                ->addColumn('department', function ($row) {
                    $html = '';
                    $html .= ($row->course)?$row->course->department->name:'--';
                    return $html;
                })
                ->editColumn('level', function ($row) {
                    $html = '';
                    $html .= ($row->level)?$row->level:'--';
                    return $html;
                })
                ->addColumn('lecturer', function ($row) {
                    $html = '';
                    $html .= ($row->course)?$row->course->lecturer->name:'--';
                    return $html;
                })
                ->editColumn('day', function ($row) {
                    $html = '';
                    $html .= ($row->day)?$row->day:'--';
                    return $html;
                })
                ->addColumn('duration', function ($row) {
                    $html = '';
                    $html .= ($row->day)?$row->start_time.'<br/> to <br/>'.$row->end_time:'--';
                    return $html;
                })
                ->addColumn('action', function ($row) use ($module_name) {
                    $config = ['edit' => true, 'delete' => true];
                    $html = view('shared.action_button', compact('module_name', 'row', 'config'));
                    return $html;
                })
                ->escapeColumns([])
                ->make();
        } catch (\Exception $exception) {
            return [];
        }
    }

}
