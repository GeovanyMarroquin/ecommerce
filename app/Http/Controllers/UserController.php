<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("users.list");
    }

    public function listAllUsers()
    {
        return User::all()->map(fn($user) => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            "editRoute" => route("users.edit", $user->id),
        ]);

    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'fullName' => ['required', 'max:100', "string"],
            'password' => [Password::min(8), Password::required()],
            "email" => ["email", "required", "unique:users,email"],
        ]);

        $user = new User([
            "name" => $validatedData["fullName"],
            "password" => bcrypt($validatedData["password"]),
            "email" => $validatedData["email"],
        ]);
        $user->save();

        return response()->json([
            "data" => $this->listAllUsers(),
            "message" => "Guardado exitosamente",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //todo: mostrar info de usuario autenticado
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validation = [
            'fullName' => ['required', 'max:100', "string"],
            "email" => ["email", "required"],
        ];
        if ($request->input("password")) {
            $validation["password"] = [Password::min(8), Password::required()];
        }

        $validatedData = $request->validate($validation);

        $fillable = [
            "name" => $validatedData["fullName"],
            "email" => $validatedData["email"],
        ];
        if ($request->input("password")) {
            $fillable["password"] = bcrypt($request->input("password"));
        }
        $user->fill($fillable);
        $user->save();

        return response()->json([
            "data" => $this->listAllUsers(),
            "message" => "Editado exitosamente",
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            "data" => $this->listAllUsers(),
            "message" => "Eliminado exitosamente",
        ]);
    }
}
