<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Usuarios extends Model
{
    protected $fillable = [
        'Nombre',
        'Apellidos',
        'Correo',
        'Contraseña',
        'Telefono',
        'Rol_id',
        'Creado_por',
    ];
    use HasFactory;
    use SoftDeletes;
}
