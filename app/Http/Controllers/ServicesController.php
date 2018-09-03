<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Services\Forms\LecturerForm;
use App\AMS\Modules\Services\Validators\ValidateCreateLecturer;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class ServicesController extends Controller
{
    protected $module_name = 'services';
    protected $ams;

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
        $form = $formBuilder->create(LecturerForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => []
        ]);

        $all_services = $this->ams->service()->model->total();
        $mostExpensive = $this->ams->service()->model->mostExpensive();
        $leastExpensive = $this->ams->service()->model->leastExpensive();

        return view($this->module_name.'.index', compact('form','all_services',
            'mostExpensive','leastExpensive'));
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
     * @param  ValidateCreateLecturer  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateLecturer $request)
    {
        $data = array_only($request->all(), ['name','price',
            'description']);
        $store = $this->ams->service()->create($data);
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

    public function getService($id)
    {
        if ($id) {
            $service = $this->ams->service()->get($id);
            return response()->json($service);
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
        $data = array_only($request->all(), ['name','price',
            'description']);
        $update = $this->ams->service()->update($data,$id);
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
        $delete = $this->ams->service()->delete($id);
        return response()->json($delete);
    }
}
