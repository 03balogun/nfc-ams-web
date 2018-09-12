<div class="row">
    @if(isset($records))
        @foreach($records as $item => $values)
            @if(array_sum($values))
            <div class="col-md-2">
                <span class="sparkline">
                    @foreach($values as $value)
                        {{$value}},
                    @endforeach
                </span>
                <div class="font-w600 mt-10">
                    {{$item}}
                </div>
            </div>
            @endif
        @endforeach
    @else
        <div class="col-md-12">
            <h5>--</h5>
        </div>
    @endif
</div>