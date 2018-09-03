@if($histories)
    {{--TODO make breadcomd more dynamic interms of passing data--}}
    <div class="bg-body-light border-b">
        <div class="content py-5 text-center">
            <nav class="breadcrumb bg-body-light mb-0">
                {{--Cool Stuff I did here lol--}}
                @foreach($histories as $index => $history)
                    @if(count($histories) > 1 && $history !== $histories[count($histories)-1])
                        <a class="breadcrumb-item" href="{{route(strtolower($history).'.index')}}">{{$history}}</a>
                    @endif
                    @if((count($histories) - 1)  === $index)
                        <span class="breadcrumb-item active">{{$history}}</span>
                    @endif
                @endforeach
            </nav>
        </div>
    </div>
@endif