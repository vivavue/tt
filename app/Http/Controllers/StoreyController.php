<?php

namespace App\Http\Controllers;

use App\Models\Storey;
use Illuminate\Http\Request;

class StoreyController extends Controller
{
    public function index()
    {
        $storeys = Storey::all();
        return response()->json($storeys);
    }
}
