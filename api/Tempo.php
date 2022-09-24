<?php
namespace Api;

class Tempo{
    function apiTempo()
    {
        $dados = json_decode(file_get_contents('https://api.hgbrasil.com/weather?woeid=455827&key=a425a565'), true); // Recebe os dados da API
        var_dump($dados); // Mostra os dados
    }
}
?>