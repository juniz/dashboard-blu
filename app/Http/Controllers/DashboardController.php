<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Mou;
use Illuminate\Support\Facades\Redirect;


class DashboardController extends Controller
{
    public function index(): Response
    {
        $mou = Mou::all();
        return Inertia::render('Dashboard/Index', [
            'mou' => $mou
        ]);
    }

    public function simpanMou(Request $request)
    {
        $request->validate([
            'nomor' => 'required|unique:mou,nomor',
            'uraian' => 'required',
            'pihakKedua' => 'required',
            'tmtAwal' => 'required|date',
            'tmtAkhir' => 'required|date',
        ], [
            'nomor.required' => 'Nomor tidak boleh kosong',
            'nomor.unique' => 'Nomor sudah ada',
            'uraian.required' => 'Uraian tidak boleh kosong',
            'pihakKedua.required' => 'Pihak kedua tidak boleh kosong',
            'tmtAwal.required' => 'TMT Awal tidak boleh kosong',
            'tmtAkhir.required' => 'TMT Akhir tidak boleh kosong',
            'tmtAwal.date' => 'TMT Awal harus berupa tanggal',
            'tmtAkhir.date' => 'TMT Akhir harus berupa tanggal',
        ]);
        try {
            Mou::create([
                'nomor' => $request->nomor,
                'uraian' => $request->uraian,
                'pihak_kedua' => $request->pihakKedua,
                'tmt_awal' => $request->tmtAwal,
                'tmt_akhir' => $request->tmtAkhir,
            ]);
            return Redirect::route('dashboard')->with('success', 'Data MOU berhasil disimpan');
        } catch (\Throwable $e) {
            return Redirect::route('dashboard')->with('error', 'Data MOU gagal disimpan : ' . $e->getMessage());
        }
    }
}
