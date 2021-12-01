<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre')->unique();
            $table->timestamps();
            $table->softDeletes();
        });
        
        DB::table("roles")->insert(["Nombre" => "Root"]);
        DB::table("roles")->insert(["Nombre" => "Admin"]);
        DB::table("roles")->insert(["Nombre" => "User"]);
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
