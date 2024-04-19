<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        $poliklinik = DB::table('poliklinik')->where('status', '1')->get();
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'poliklinik' => $poliklinik
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required',
            'poliklinik' => 'required'
        ], [
            'email.required' => 'Username tidak boleh kosong',
            'email.email' => 'Username tidak valid',
            'password.required' => 'Password tidak boleh kosong',
            'poliklinik.required' => 'Poliklinik tidak boleh kosong'
        ]);

        $cek = DB::table('user')
            ->join("dokter", "dokter.kd_dokter", "=", DB::Raw("AES_DECRYPT(id_user, 'nur')"))
            ->whereRaw("id_user = AES_ENCRYPT('{$request->username}', 'nur')")
            ->selectRaw("AES_DECRYPT(id_user, 'nur') as id_user, AES_DECRYPT(password, 'windi') as password")
            ->first();

        if ($cek) {
            if ($cek->password == $request->password) {
                session()->put('user', $cek->id_user);
                session()->put('poliklinik', $request->poliklinik);
                $request->session()->regenerate();
                return redirect()->intended(RouteServiceProvider::HOME);
            } else {
                dd($cek);
                return redirect()->back()->with('error', 'Password salah');
            }
        } else {
            return redirect()->back()->with('error', 'Username tidak ditemukan');
        }
        // $request->authenticate();

        // $request->session()->regenerate();

        // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
