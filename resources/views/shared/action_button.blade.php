<div class="btn-group" role="group">
    <button type="button" class="btn btn-dark btn-sm btn-square dropdown-toggle"
            id="btnGroupVerticalDrop1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Action
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
        @foreach($config as $item => $value)
            @if($item === 'show' && $value)
                <a class="dropdown-item" href="{{route($module_name.'.show',$row->id)}}">
                    <i class="fa fa-fw fa-eye-slash mr-5"></i>Full Details
                </a>
            @endif
            @if($item === 'edit' && $value)
                <a class="dropdown-item editBtn" data-ref="{{$row->id}}" href="javascript:void(0)">
                    <i class="fa fa-fw fa-edit mr-5"></i>Edit
                </a>
            @endif
            @if($item === 'delete' && $value)
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger deleteBtn" data-href="{{route($module_name.'.destroy',$row->id)}}"
                   href="javascript:void(0)">
                    <i class="fa fa-trash fa-pencil mr-5"></i>Delete
                </a>
            @endif
        @endforeach
    </div>
</div>