<?php

require_once "vendor/autoload.php";
header("charset=utf-8");

$url = trim($_GET["route"], "/");

$route = explode("/", $url);
$variables = filter_input_array(INPUT_GET);
unset($variables["route"]);

if (count($route) > 2) {
    http_response_code(400);
    echo json_encode([
        "status" => false,
        "message" => "Só pode existir uma classe e uma método na chama da API."
    ]);
    exit;
}

$class = Api::class  . "\\" . ucfirst($route[0]);
$methode = $route[1];

if (!class_exists($class)) {
    http_response_code(400);
    echo json_encode([
        "status" => false,
        "message" => "Classe nao existe."
    ]);
    exit;
}

if (!method_exists($class, $methode)) {
    http_response_code(400);
    echo json_encode([
        "status" => false,
        "message" => "Método não existe."
    ]);
    exit;
}

$execution = (new $class)->$methode($variables);