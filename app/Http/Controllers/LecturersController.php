<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Lecturers\Forms\LecturerForm;
use App\AMS\Modules\Lecturers\Validators\ValidateCreateLecturer;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class LecturersController extends Controller
{
    protected $module_name = 'lecturers';
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
        $form = $formBuilder->create(LecturerForm::class, [
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
     * @param  ValidateCreateLecturer  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ValidateCreateLecturer $request)
    {
        $data = array_only($request->all(), ['lecturer_id','name']);
        $store = $this->ams->lecturers()->create($data);
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

    public function getLecturer($id)
    {
        if ($id) {
            $lecturer = $this->ams->lecturers()->get($id);
            return response()->json($lecturer);
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
        $data = array_only($request->all(), ['lecturer_id','name']);
        $update = $this->ams->lecturers()->update($data,$id);
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
        $delete = $this->ams->lecturers()->delete($id);
        return response()->json($delete);
    }
}
