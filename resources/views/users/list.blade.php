@extends('layouts.app')
@section("customJs")
@endsection
@section('content')
    @php $options = ['Inicio' => route('home'), 'Usuarios' => ""]; @endphp
    <x-breadcrumb title="Gestion de Usuarios" :options="$options"></x-breadcrumb>

    <x-card>
        <div class="row d-flex justify-content-end">
            <div class="col-3">
                <x-button id="btnAddUser" class="btn-success btn-sm">
                    <i class="bi bi-plus-circle-fill"></i>
                    AGREGAR
                </x-button>
            </div>
        </div>
        <div class="row">
            <div id="tableAllUsers"></div>
        </div>
    </x-card>
@endsection

@section("modals")
    <x-modal modalId="modalAggNewUser"
             modalTitle="Agregar o actualizar usuario"
             cancelButtonText="Cancelar"
             acceptButtonText="Guardar"
             acceptButtonId="btnAggNewUser"
    >
        <x-input type="hidden" id="userId"></x-input>

        <div class="mb-3">
            <x-label value="Nombre" for="fullName"></x-label>
            <x-input type="text" id="fullName"></x-input>
        </div>
        <div class="mb-3">
            <x-label value="Correo electronico" for="email"></x-label>
            <x-input type="email" id="email"></x-input>
        </div>
        <div class="mb-3">
            <x-label value="Contraseña" for="password"></x-label>
            <x-input type="password" id="password"></x-input>
        </div>
    </x-modal>
@endsection
