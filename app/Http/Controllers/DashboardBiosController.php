<?php

namespace App\Http\Controllers;

use App\Models\Mou;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardBiosController extends Controller
{
    public function index(): Response
    {
        $merah = 0;
        $kuning = 0;
        $hijau = 0;
        $mou = Mou::all();
        foreach ($mou as $d) {
            if ($d->tmt_akhir < date('Y-m-d', strtotime('+2 month'))) {
                $merah++;
            } elseif ($d->tmt_akhir < date('Y-m-d', strtotime('+3 month'))) {
                $kuning++;
            } else {
                $hijau++;
            }
        }
        $data = [
            [
                'label' => 'Merah',
                'jumlah' => $merah,
                'fill' => '#FF0000'
            ],
            [
                'label' => 'Kuning',
                'jumlah' => $kuning,
                'fill' => '#FFFF00'
            ],
            [
                'label' => 'Hijau',
                'jumlah' => $hijau,
                'fill' => '#00FF00'
            ]
        ];
        // dd($data);
        return Inertia::render('Guest/DashboardBios', [
            'data' => $data
        ]);
    }
}
