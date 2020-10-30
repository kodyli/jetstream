<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Jetstream\Jetstream;

class ItemController extends Controller
{  
    public function index(Request $request){
        return view('items.show', ['items' => $request->user()->ownedItems]);
    }
}
