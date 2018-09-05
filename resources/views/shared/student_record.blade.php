@if($student_records = $model->get())
    <h2 class="content-heading" id="record-header">
        <span class="student-name">{{$student->name}}</span>
        <span class="record-date-range pull-right">
                <span class="date-from">{{$date_from}}</span> - <span class="date-to">{{$date_to}}</span>
            </span>
    </h2>
    <table class="table table-bordered table-striped table-vcenter">
        <thead>
        <tr>
            <th>Lecturer</th>
            <th>Course</th>
            <th>Status</th>
            <th>Note</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        @foreach($student_records as $student_record)
            <tr>
                <td>{{$student_record->lecturer->name}}</td>
                <td>{{$student_record->course->title}}</td>
                <td>
                    <span class="badge {{$color = str_replace(' ','_',strtolower(attendanceStatus($student_record->status)))}}">
                        {{attendanceStatus($student_record->status)}}</span>
                </td>
                <td>{{$student_record->note?$student_record->note:'--'}}</td>
                <td>{{$student_record->date}}</td>
            </tr>
            <div class="d-none">
                @if($student_record->status === 1)
                    {{$present++ }}
                @elseif($student_record->status === 2)
                    {{$late++}}
                @elseif($student_record->status === 3)
                    {{$absent_excused++}}
                @elseif($student_record->status === 4)
                    {{$absent_unexcused++}}
                @endif
            </div>
        @endforeach
        <tr>
            <td colspan="5"></td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td><h5>Summary</h5></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td>Total Number Of Times <strong>Present</strong></td>
            <td><strong>{{$present}}</strong></td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td>Total Number Of Times <strong>Late</strong></td>
            <td><strong>{{$late}}</strong></td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td>Total Number Of Times <strong>Absent Excused</strong></td>
            <td><strong>{{$absent_excused}}</strong></td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td>Total Number Of Times <strong>Absent Unexcused</strong></td>
            <td><strong>{{$absent_unexcused}}</strong></td>
        </tr>
        </tbody>
    </table>
@else
    <h4 class="text-center text-muted">No record found regarding your entry</h4>
@endif