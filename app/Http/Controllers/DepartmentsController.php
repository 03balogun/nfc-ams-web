<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Departments\Forms\DepartmentForm;
use App\AMS\Modules\Departments\Validators\ValidateCreateDepartment;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class DepartmentsController extends Controller
{
    protected $module_name = 'departments';
    protected $ams;

    public function __construct(Ams $ams)
    {
        $this->ams = $ams;
    }

    /**
     * Display a listing of the resource.
     *
     * @param FormBuilder $formBuilder
     * @return \Illuminate\Http\Response
     */
    public function index(FormBuilder $formBuilder)
    {
        $form = $formBuilder->create(DepartmentForm::class, [
            'method' => 'POST',
            'url' => route($this->module_name . '.store'),
            'data' => []
        ]);

        return view($this->module_name.'.index', compact('form'));
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
     * @param  ValidateCreateDepartment  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateDepartment $request)
    {
        $data = array_only($request->all(), ['name']);
        $store = $this->ams->departments()->create($data);
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

    public function getDepartment($id)
    {
        if ($id) {
            $department = $this->ams->departments()->get($id);
            return response()->json($department);
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
        $data = array_only($request->all(), ['name']);
        $update = $this->ams->departments()->update($data,$id);
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
        $delete = $this->ams->departments()->delete($id);
        return response()->json($delete);
    }
}
