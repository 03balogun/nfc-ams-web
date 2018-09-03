<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Orders\Forms\CourseForm;
use App\AMS\Modules\Orders\Validators\ValidateCreateCourses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Kris\LaravelFormBuilder\FormBuilder;

class OrdersController extends Controller
{

    protected $ams;
    public $module_name = "orders";

    public function __construct(Ams $ams)
    {
        $this->ams = $ams;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(FormBuilder $formBuilder)
    {
        $customers = $this->ams->customer()->model->select(['first_name', 'last_name', 'id'])->get();
        $filteredCustomer = [];
        foreach ($customers as $customer) {
            $filteredCustomer[$customer->id] = $customer->first_name . ' ' . $customer->last_name;
        }

        $users = $this->ams->user()->model->select(['first_name', 'last_name', 'id'])->get();
        $filteredUsers = [];
        foreach ($users as $user) {
            $filteredUsers[$user->id] = $user->first_name . ' ' . $user->last_name;
        }

        $form = $formBuilder->create(CourseForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => [
                'customers' => $filteredCustomer,
                'users' => $filteredUsers
            ]
        ]);

        $all_active_orders = $this->ams->customer()->model->active();
        $all_orders = $this->ams->customer()->model->total();
        $this_month_orders = $this->ams->customer()->model->thisMonth();

        return view($this->module_name . '.index', compact('form',
            'all_orders', 'all_active_orders', 'this_month_orders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(FormBuilder $formBuilder)
    {
        //TODO turn this ajax request, because customers could be 1M
        $customers = $this->ams->customer()->model->select(['first_name', 'last_name', 'id'])->get();
        $filteredCustomer = [];
        foreach ($customers as $customer) {
            $filteredCustomer[$customer->id] = $customer->first_name . ' ' . $customer->last_name;
        }

        $services = $this->ams->service()->model->select(['id', 'name', 'price'])->get();
        $form = $formBuilder->create(CourseForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => [
                'customers' => $filteredCustomer
            ]
        ]);
        return view($this->module_name . '.create', compact('form', 'services'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateCourses $request)
    {
        $data = $request->all();
        //TODO take only fields we need from the coming request
        $group_id = current_user()->group_id;

        $orders = [
            'customer_id' => $data['customer_id'],
            'group_id' => $group_id,
            'status' => $data['operation_status'],
            'delivery_date' => $data['delivery_date'],
            'created_by' => current_user()->id,
            'order_date' => $data['order_date'],
        ];

        $invoice = [
            'order_id' => null,
            'customer_id' => $data['customer_id'],
            'total' => $data['grand_total'],
            'discount' => $data['discount'],
            'payment_status' => $data['payment_status'],
            'payment_method' => $data['payment_method'],
            'payment_date' => $data['payment_date'],
            'group_id' => $group_id,
        ];

        $created_order = $this->ams->order()->create($orders);

        if (!$created_order->status) return response()->json($created_order);

        $services = $data['services'];

        $now = date('y-m-d h:i:s');;

        foreach ($services as $index => $service) {
            //set order_service additional attribute
            $res = $this->ams->service()->get($service['service_id']);
            $services[$index]['service_name'] = ($res->data) ? $res->data->name : '--';
            $services[$index]['order_id'] = $created_order->data->id;
            $services[$index]['created_at'] = $now;
            $services[$index]['order_id'] = $created_order->data->id;
            unset($services[$index]['total']);
        }

        //CreateMany Lecturers for this Course.
        $created_services = $this->ams->order()->createServices($services);
        if (!$created_services->status) {
            //If error break and delete created order
            $created_order->data->delete();
            return response()->json($created_services);
        }

        $invoice['order_id'] = $created_order->data->id;//set the invoice orderId
        Log::info(json_encode($invoice));
        $created_invoice = $this->ams->invoice()->create($invoice);//create invoice

        if (!$created_invoice->status) {
            //if error occurs delete order, delete services and return error message
            $this->ams->order()->deleteRelatedServices($created_order->data->id);
            $created_order->data->delete();
            return response()->json($created_invoice);
        }
        return response()->json($created_order);
        //Store Course
        //Store Order_Services
        //Store Attendances
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = $this->ams->order()->get($id);
        return (!$order->status || !$order->data) ?

            redirect()->route('orders.index')
                ->with(errorSession('Record Not Found')) :

            view($this->module_name . '.show', ['order' => $order->data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //delete services
        //delete invoice
        //delete order
        $order = $this->ams->order()->get($id);
        if (!$order->status || !$order->data)return response()->json(systemResponse()
            ->status(false)->reason('Record Not found'));

        $delete_order_services = $this->ams->order()->deleteRelatedServices($id);
        if ($order->data->invoice)$delete_invoice = $order->data->invoice->delete();
        $delete_order = $order->data->delete();
        return response()->json(systemResponse()->status($delete_order)->reason("Success"));
    }
}
