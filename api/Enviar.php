<?php

namespace Api;

class Enviar
{
    public function temperatura(): array
    {
        return [
            "status" => true,
            "message" => "temperatura"
        ];
    }

    public function umidade(): array
    {
        return [
            "status" => true,
            "message" => "umidade"
        ];
    }
}
