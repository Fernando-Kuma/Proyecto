<!DOCTYPE html>
<html>
        
    <body style="background-color:cornflowerblue" class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <div style="text-align: right" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                <a style="font-family:Arial, Helvetica, sans-serif; color:darkblue; font-size: 15pt" href="{{ url('/app') }}" class="text-sm text-gray-700 dark:text-gray-500 underline" >Log in</a>
            </div>
            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                        <a href="{{ url('/home') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
                    @else
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

        <div style="text-align:center">
        <img style="border: 10px solid; color:brown" src="images/logo.png" width="600" height="400">
        </div>
        <h1 style="text-align:center; font-family:Arial, Helvetica, sans-serif; color:red">Nuestro objetivo</h1>
        <h3 style="text-align:center; font-family:Arial, Helvetica, sans-serif">Para el constructor - Ayudarte a encontrar un catálogo de productos para la construcción;
            <br /> cuando lo necesites, todo en un solo lugar y con entrega a domicilio.</h3>
        <h3 style="text-align:center; font-family:Arial, Helvetica, sans-serif">Para el particular - Contamos con personal capacitado para apoyarte en la selección e instalación
            <br /> de nuestros productos, brindándote una solución completa, práctica y de calidad.</h3>
    </body>
</html>