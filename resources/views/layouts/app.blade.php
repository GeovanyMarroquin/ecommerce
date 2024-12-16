<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    {{--    <link rel="dns-prefetch" href="//fonts.bunny.net">--}}
    {{--    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">--}}
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="{{asset("assets/images/icon.svg")}}" type="image/x-icon">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
<div id="app">
    @include("layouts.sidebar")
    <div id="main">
        <header class="mb-3">
            <a href="#" class="burger-btn d-block d-xl-none">
                <i class="bi bi-justify fs-3"></i>
            </a>
        </header>

        <div class="page-heading">
            @yield('mainTitle')
        </div>

        <div class="page-content">
            <section class="row">
                @yield('content')
            </section>
        </div>

        @include("layouts.footer")
    </div>
</div>
</body>
</html>
