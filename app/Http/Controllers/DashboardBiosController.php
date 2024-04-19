<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;

class DashboardBiosController extends Controller
{
    public function index(): Response
    {
        $data = DB::table('bios_log_spesialis')->first();
        return Inertia::render('Guest/DashboardBios', [
            'data' => $data
        ]);
    }
}
