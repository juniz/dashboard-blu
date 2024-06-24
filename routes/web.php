<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\LoginStatus;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Guest/DashboardRenstra');
});
Route::get('/keu', function () {
    return Inertia::render('Guest/DashboardKeu');
});

Route::middleware('loginStatus')->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
    Route::post('/mou', [App\Http\Controllers\DashboardController::class, 'simpanMou'])->name('mou.store');
    // Route::get('/bios', [App\Http\Controllers\DashboardBiosController::class, 'index'])->name('bios');
});
// Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
// Route::post('/mou', [App\Http\Controllers\DashboardController::class, 'simpanMou'])->name('mou.store');
Route::get('/bios', [App\Http\Controllers\DashboardBiosController::class, 'index'])->name('bios');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
