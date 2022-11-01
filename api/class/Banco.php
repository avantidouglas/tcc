<?php

namespace Api\Class;

class Banco
{
    private $user = "root";
    private $password = "";
    private $host = "localhost";
    private $dbname = "tcc";
    public $db;

    public function __construct()
    {
        $this->conectaBanco();
    }
    
    public function conectaBanco()
    {
        $this->db = mysqli_connect($this->host, $this->user, $this->password, $this->dbname);
    }

    public function close()
    {
        mysqli_close($this->db);
    }

    public function retornaConfigBomba($bomba)
    {
        $sql = "SELECT bomba_ativa, bomba_intervalo, bomba_umidade_max, bomba_tempo_vazao FROM tcc.bomba WHERE id = $bomba";
        $result = $this->db->query($sql)->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    public function retornaConfigTemperatura($sensor)
    {
        $sql = "SELECT * FROM tcc.temperatura_config WHERE id = $sensor";
        $result = $this->db->query($sql)->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    public function atualizaBomba($bomba)
    {

    }

    public function atualizaTemperatura($temperatura)
    {

    }
}