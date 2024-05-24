<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogController extends Controller
{
    public function index()
    {
        $logs = Log::all();

        return Inertia::render('Log/IndexLog', [
            'logs' => $logs,
        ]);
    }
}
