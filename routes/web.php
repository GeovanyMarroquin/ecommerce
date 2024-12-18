<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome2');
});

\Illuminate\Support\Facades\Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware(['auth:web'])->prefix("admin")->group(function () {
    // Rutas usuarios
    Route::prefix("users")->name("users.")->group(function () {
        Route::get("/", [UserController::class, "index"])->name("index");
        Route::get("listAllUsers", [UserController::class, "listAllUsers"])->name("listAllUsers");
        Route::get("edit/{user}", [UserController::class, "edit"])->name("edit");
    });

    // Ruta Categorias

    // Ruta Productos
});
