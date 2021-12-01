<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Illuminate\Support\Facades\DB;


class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->string('Apellidos');
            $table->string('email')->unique();
            $table->timestamp('Correo_verified_at')->nullable();
            $table->string('password');
            $table->string('Telefono',12);
            $table->foreignId('Rol_id')->constrained('roles');
            $table->foreignId('Creado_por')->nullable()->constrained('users');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });

        DB::table("users")
            ->insert([
                "Nombre" => "Root",
                "Apellidos" => "Admin",
                "email" => "rootadmin@gmail.com",
                "password" => bcrypt("root123admin"),
                "Telefono" => "5555555555",
                "Rol_id" => 1
            ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
