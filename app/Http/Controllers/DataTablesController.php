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

    public function departmentsRecords()
    {
        try {
            $module_name = "departments";
            $columns = ['id', 'name', 'created_at'];
            $records = $this->ams->departments()->getRecords($columns)->data;
            return DataTables::of($records)
                ->editColumn('name', function ($row) {
                    $html = '';
                    $html .= "<a href=" . route('departments.show', $row->id) . ">$row->name</a>";
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
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
                    $html .= "<a href='javascript:;'>$row->lecturer_id</a>";
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
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
                    $name = ($row->lecturer) ? $row->lecturer->name : '--';
                    $html .= "<a href='javascript:;'>$name</a>";
                    return $html;
                })
                ->editColumn('department_id', function ($row) {
                    $html = '';
                    $name = ($row->department) ? $row->department->name : '--';
                    $html .= "<a href='javascript:;'>$name</a>";
                    return $html;
                })
                ->editColumn('created_at', function ($row) {
                    $html = '';
                    $html .= date_format(date_create($row->created_at), 'd M, Y h:ia');
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

    public function timeTableRecords()
    {
        try {
            $module_name = "timetables";
            $columns = ['id', 'course_id', 'level', 'day', 'start_time', 'end_time', 'note', 'created_at'];
            $records = $this->ams->timetables()->getRecords($columns)->data;
            return DataTables::of($records)
                ->addColumn('course_code', function ($row) {
                    $html = '';
                    $html .= ($row->course) ? $row->course->code : '--';
                    return $html;
                })
                ->addColumn('course_title', function ($row) {
                    $html = '';
                    $html .= ($row->course) ? $row->course->title : '--';
                    return $html;
                })
                ->addColumn('department', function ($row) {
                    $html = '';
                    $html .= ($row->course) ? $row->course->department->name : '--';
                    return $html;
                })
                ->editColumn('level', function ($row) {
                    $html = '';
                    $html .= ($row->level) ? $row->level : '--';
                    return $html;
                })
                ->addColumn('lecturer', function ($row) {
                    $html = '';
                    $html .= ($row->course) ? $row->course->lecturer->name : '--';
                    return $html;
                })
                ->editColumn('day', function ($row) {
                    $html = '';
                    $html .= ($row->day) ? $row->day : '--';
                    return $html;
                })
                ->addColumn('duration', function ($row) {
                    $html = '';
                    $html .= ($row->day) ? $row->start_time . '<br/> to <br/>' . $row->end_time : '--';
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


    public function attendanceRecords(Request $request)
    {
        try {
            $module_name = "attendances";
            $query = array_only($request->all(), ['department', 'course', 'attendance_date']);
            $columns = ['id', 'student_id', 'lecturer_id', 'course_id', 'department_id', 'date', 'status', 'note', 'created_at'];
            $mapper = [
                'department' => 'department_id',
                'course' => 'course_id',
                'attendance_date' => 'date',
            ];
            if (count($query)
                && $query['department'] != null
                && $query['course'] != null
                && $query['attendance_date'] != null) {
                $records = $this->ams->attendances()->model->select($columns);
                foreach ($query as $item => $value) if ($value != null && $value != 'null') $records->where($mapper[$item], $value);
                return DataTables::of($records)
                    ->addColumn('course_id', function ($row) {
                        $html = '';
                        $html .= ($row->course) ? $row->course->code : '--';
                        return $html;
                    })
                    ->addColumn('lecturer', function ($row) {
                        $html = '';
                        $html .= ($row->lecturer) ? $row->lecturer->name : '--';
                        return $html;
                    })
                    ->addColumn('student', function ($row) {
                        $html = '';
                        $html .= ($row->student) ? $row->student->name : '--';
                        return $html;
                    })
                    ->addColumn('department_id', function ($row) {
                        $html = '';
                        $html .= ($row->deparment) ? $row->deparment->name : '--';
                        return $html;
                    })
                    ->addColumn('note', function ($row) {
                        $html = '';
                        $html .= ($row->note) ? $row->note : '--';
                        return $html;
                    })
                    ->addColumn('date', function ($row) {
                        $html = '';
                        $html .= ($row->course) ? $row->course->department->name : '--';
                        return $html;
                    })
                    ->editColumn('status', function ($row) {
                        $html = '';
                        $status = attendanceStatus($row->status);
                        $color = str_replace(' ','_',strtolower($status));
                        $html .= '<span class="badge '.$color.'">'.$status.'</span>';
                        return $html;
                    })
                    ->addColumn('action', function ($row) use ($module_name) {
                        $config = ['delete' => true];
                        $html = view('shared.action_button', compact('module_name', 'row', 'config'));
                        return $html;
                    })
                    ->escapeColumns([])
                    ->make();
            }
            return DataTables::of([])->make();
        } catch (\Exception $exception) {
            return [];
        }
    }

}
