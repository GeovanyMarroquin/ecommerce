@extends('layouts.app')
@section("customJs")
@endsection
@section('content')
    @php $options = ['Inicio' => route('home'), 'Usuarios' => ""]; @endphp
    <x-breadcrumb title="Gestion de Usuarios" :options="$options"></x-breadcrumb>

    <x-card>
        <div id="tableAllUsers"></div>

    </x-card>
@endsection
