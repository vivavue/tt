<?php

namespace App\Http\Controllers;

use App\Models\Bathroom;
use Illuminate\Http\Request;

class BathroomController extends Controller
{
    public function index()
    {
        $bathrooms = Bathroom::all();

        return response()->json($bathrooms);
    }
}
