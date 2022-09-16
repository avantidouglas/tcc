<?php

namespace Api;

class Enviar
{
    public function temperatura($variaveis): array
    {
        return [
            "status" => true,
            "message" => "temperatura",
            "variaveis" => $variaveis
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
