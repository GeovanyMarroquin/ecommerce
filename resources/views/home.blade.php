@extends('layouts.app')
@section('content')

    <x-breadcrumb title="Seccion Principal Del Sistema" :options="['Dashboard' => route('home')]"></x-breadcrumb>

    <x-card title="Example Content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas omnis
        laudantium tempore
        exercitationem, expedita aspernatur sed officia asperiores unde tempora maxime odio
        reprehenderit
        distinctio incidunt! Vel aspernatur dicta consequatur!
    </x-card>
@endsection
