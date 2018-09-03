<table class="table">
    <thead class="">
    @foreach($timetables as $day => $periods)
        <tr>
            <th style="vertical-align: inherit;">{{$day}}</th>
            <td colspan="{{count($timetables)}}"
                style="border-top: none;border-bottom: 1px solid #eaecee;">
                            <span class="mb-15">There {{count($periods)}}
                                Lecture{{count($periods)>0?'s':''}} on this day</span>
                <table class="table table-bordered" cellpadding="5">
                    @if($periods)
                        @foreach($periods as $period)
                            <td class="">
                                                    <span class="text-muted">
                                                    {{isset($period['course']['title'])?$period['course']['title']:'--'}}
                                                        <br/>
                                                        {{isset($period['course']['code'])?$period['course']['code']:'--'}}
                                                </span>
                                <hr/>
                                <div>
                                    <strong>Start:
                                    </strong> {{$period['start_time']}} <br/>
                                    <strong>End :
                                    </strong> {{$period['end_time']}}<br/>
                                    <strong>Lecturer </strong>
                                    : {{isset($period['course']['lecturer']['name'])?$period['course']['lecturer']['name']:'--'}}
                                    <br/>
                                    <strong>Level </strong>
                                    : {{isset($period['course']['level'])?$period['course']['level']:'--'}}
                                    <br/>
                                    <strong>Note </strong>
                                    : {{isset($period['note'])?$period['note']:'--'}}
                                    <br/>
                                </div>
                            </td>
                        @endforeach

                    @else
                        <div class="text-center" style="width: 100%;">
                            <h5 class="text-muted">
                                --
                            </h5>
                        </div>
                    @endif
                </table>
            </td>
        </tr>
    @endforeach
    </thead>
</table>