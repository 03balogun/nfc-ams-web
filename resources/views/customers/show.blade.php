@extends('layouts.app')
@section('title') Customers @endsection
@section('customers') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')

@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                {{--<div class="mb-20">--}}
                {{--<a class="img-link" href="javascript:;">--}}
                {{--<img class="img-avatar img-avatar-thumb" src="{{asset('assets/img/avatars/avatar0.jpg')}}" alt="">--}}
                {{--</a>--}}
                {{--</div>--}}
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">{{$customer->title}} {{$customer->first_name}} {{$customer->last_name}}</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">

                    </h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Students',
    ($customer->title?$customer->title.' ':'').$customer->first_name.' '.$customer->last_name]])
    <div class="content">
        <h2 class="content-heading">
            Overview
            <button type="button" onclick="history.back();" class="btn btn-sm btn-danger float-right mr-5">
                <i class="fa fa-arrow-circle-left mr-5"></i> Go Back
            </button>
        </h2>
        <div class="row gutters-tiny">
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow" href="javascript:void(0)">
                    <div class="block-content block-content-full block-sticky-options">
                        <div class="block-options">
                            <div class="block-options-item">
                                <i class="fa fa-shopping-bag fa-2x text-body-bg-dark"></i>
                            </div>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 js-count-to-enabled" data-toggle="countTo"
                                 data-to="39">39
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">Orders</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow editBtn" data-ref="{{$customer->id}}" href="javascript:void(0)">
                    <div class="block-content block-content-full block-sticky-options">
                        <div class="block-options">
                            <div class="block-options-item">
                                <i class="fa fa-user fa-2x text-info-light"></i>
                            </div>`
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-info">
                                <i class="fa fa-pencil"></i>
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">Edit Customer</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow deleteBtn"
                   data-href="{{route('customers.destroy',$customer->id)}}"
                   href="javascript:void(0)">
                    <div class="block-content block-content-full block-sticky-options">
                        <div class="block-options">
                            <div class="block-options-item">
                                <i class="fa fa-user fa-2x text-danger-light"></i>
                            </div>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-danger">
                                <i class="fa fa-times"></i>
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">Remove Customer</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow" href="javascript:void(0)">
                    <div class="block-content block-content-full block-sticky-options">
                        <div class="block-options">
                            <div class="block-options-item">
                                <i class="fa fa-shopping-bag fa-2x text-success-light"></i>
                            </div>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-primary">
                                <i class="fa fa-cart-plus"></i>
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">New Order</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <h2 class="content-heading">Details</h2>
        <div class="row row-deck gutters-tiny">
            <div class="col-md-6">
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Personal Details</h3>
                    </div>
                    <div class="block-content">
                        <strong class="text-muted">First Name</strong><br>
                        {{$customer->title}} {{$customer->first_name}}<br/>
                        <strong class="text-muted">Last Name</strong><br>
                        {{($customer->last_name)?$customer->last_name:'--'}}<br/>
                        <strong class="text-muted">Gender</strong><br>
                        {{($customer->gender)?ucfirst($customer->gender):'--'}}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Contact Address</h3>
                    </div>
                    <div class="block-content">
                        <address>
                            <i class="fa fa-map-marker mr-5"></i> {{($customer->address)?$customer->address:'--'}}<br><br>
                            <i class="fa fa-phone mr-5"></i> {{($customer->phone_number)?$customer->phone_number:'--'}}<br>
                            <i class="fa fa-envelope-o mr-5"></i> <a href="javascript:void(0)">{{($customer->email)?$customer->email:'Email Not Set'}}</a>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="content-heading">Past Orders</h2>
        <div class="block block-rounded">
            <div class="block-content">
                <table class="table table-borderless table-sm table-striped">
                    <thead>
                    <tr>
                        <th style="width: 100px;">ID</th>
                        <th style="width: 120px;">Status</th>
                        <th class="d-none d-sm-table-cell" style="width: 120px;">Submitted</th>
                        <th class="d-none d-sm-table-cell">Customer</th>
                        <th class="text-right">Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <a class="font-w600" href="javascript:;">ORD.603</a>
                        </td>
                        <td>
                            <span class="badge badge-success">Completed</span>
                        </td>
                        <td class="d-none d-sm-table-cell">
                            2017/10/27
                        </td>
                        <td class="d-none d-sm-table-cell">
                            <a href="javascript:;">John Smith</a>
                        </td>
                        <td class="text-right">
                            <span class="text-black">$719</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="font-w600" href="javascript:;">ORD.181</a>
                        </td>
                        <td>
                            <span class="badge badge-success">Completed</span>
                        </td>
                        <td class="d-none d-sm-table-cell">
                            2017/10/26
                        </td>
                        <td class="d-none d-sm-table-cell">
                            <a href="javascript:;">John Smith</a>
                        </td>
                        <td class="text-right">
                            <span class="text-black">$813</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="font-w600" href="javascript:;">ORD.116</a>
                        </td>
                        <td>
                            <span class="badge badge-success">Completed</span>
                        </td>
                        <td class="d-none d-sm-table-cell">
                            2017/10/25
                        </td>
                        <td class="d-none d-sm-table-cell">
                            <a href="javascript:;">John Smith</a>
                        </td>
                        <td class="text-right">
                            <span class="text-black">$140</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="font-w600" href="javascript:;">ORD.452</a>
                        </td>
                        <td>
                            <span class="badge badge-success">Completed</span>
                        </td>
                        <td class="d-none d-sm-table-cell">
                            2017/10/24
                        </td>
                        <td class="d-none d-sm-table-cell">
                            <a href="javascript:;">John Smith</a>
                        </td>
                        <td class="text-right">
                            <span class="text-black">$522</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="font-w600" href="javascript:;">ORD.989</a>
                        </td>
                        <td>
                            <span class="badge badge-success">Completed</span>
                        </td>
                        <td class="d-none d-sm-table-cell">
                            2017/10/23
                        </td>
                        <td class="d-none d-sm-table-cell">
                            <a href="javascript:;">John Smith</a>
                        </td>
                        <td class="text-right">
                            <span class="text-black">$979</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h2 class="content-heading">Private Notes</h2>

        <div class="block block-rounded">
            <div class="block-content">
                <div class="alert alert-info alert-dismissable" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <p class="mb-0"><i class="fa fa-info-circle mr-5"></i> This note is only for internal use</p>
                </div>
                <form action="javascript:;" method="post" onsubmit="return false;">
                    <div class="form-group row mb-10">
                        <div class="col-12">
                            <textarea class="form-control" id="ecom-customer-note" name="ecom-customer-note"
                                      placeholder="Add a private note.." rows="4"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-alt-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="edit-customer-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-customer-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'customer-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT CUSTOMER</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-customer-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="row items-push">
                            <div class="col-xl-12">
                                <div class="row">
                                    <div class="col-md-3 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->title) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-5 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->first_name) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->last_name) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->gender) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-5 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->phone_number) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->email) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->address) !!}
                                        </div>

                                        <div class="errorMessage mt-15"></div>
                                        <div class="successMessage mt-15"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-alt-danger" data-dismiss="modal">Close</button>
                    <button class="btn btn-lg btn-primary">
                        Save
                        <i class="fa fa-save"></i>
                    </button>
                </div>
                {!! form_end($form, false) !!}
            </div>
        </div>
    </div>

@endsection
@section('page-js')
    <script src="{{asset('assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>
    <script>

        deleteRecord('{{csrf_token()}}', function (isDeleted) {
            location.href = '{{route('customers.index')}}';
        });

        editRecord('{{route('ajax.customers.get')}}', function ({data}) {
            $('#customer-update-form').attr('action', `{{url('customers/')}}/${data.id}`);
            $.each(data, (key, value) => {
                $('#customer-update-form').find(`#${key}`).val(value).trigger('change');
            });
            $('#edit-customer-modal').modal('show');
        });


        let updateFormRequestHandler = new FormRequestHandler();
        updateFormRequestHandler.busy_state = $('#update-customer-notification-bar');
        updateFormRequestHandler.ajaxRequest($('#customer-update-form'), 'POST', (data) => {
            $('.errorMessage').html('');
            $('#edit-customer-modal').modal('hide');
            //refresh table
            swal("Success", "Student record update successfully", "success");
            location.reload();
        });

    </script>
@endsection