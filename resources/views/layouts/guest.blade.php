<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Helps people find their missing objects by QR code.">
        <meta name="keywords" content="lost, found, missing objects, Qr Code">
        <title>{{ config('app.name', 'Laravel') }}</title>
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- Scripts -->
        <script src="{{asset('js/app.js')}}" defer></script>
    </head>
    <body>
        <div class="min-h-screen bg-gray-100">
            <nav x-data="{ open: false }" class="bg-white border-b border-gray-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center">
                                <x-jet-nav-link href="/"><x-jet-application-mark class="block h-9 w-auto" /></x-jet-nav-link>
                            </div>
                            <!-- Navigation Links -->
                            <div class="space-x-4 -my-px ml-4 flex">
                                <x-jet-nav-link href="/" :active="request()->routeIs('welcome')">Home</x-jet-nav-link>
                            </div>
                        </div>
                        <!--Login/Register-->
                        <div class="space-x-2 -my-px ml-4 flex">
                            <x-jet-nav-link href="{{ route('login') }}" :active="request()->routeIs('login')">Login</x-jet-nav-link>
                            <x-jet-nav-link href="{{ route('register') }}" :active="request()->routeIs('register')">Register</x-jet-nav-link>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="font-sans text-gray-900 antialiased">
                {{ $slot }}
            </div>
        </div>
    </body>
</html>
