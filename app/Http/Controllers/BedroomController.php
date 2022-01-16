<?php

namespace App\Http\Controllers;

use App\Models\Bedroom;
use Illuminate\Http\Request;

class BedroomController extends Controller
{
    public function index()
    {
        $bedrooms = Bedroom::all();

        return response()->json($bedrooms);
    }
}
