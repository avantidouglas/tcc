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
        $sql = "SELECT temperatura_max FROM tcc.temperatura_config WHERE id = $sensor";
        $result = $this->db->query($sql)->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    public function atualizaBomba($bomba, int $bomba_ativa, int $intervalo, int $umidade, int $tempo)
    {
        $sql = "UPDATE tcc.bomba SET bomba_ativa = $bomba_ativa, bomba_intervalo = $intervalo, bomba_umidade_max = $umidade, bomba_tempo_vazao = $tempo WHERE id = $bomba";
        $result = $this->db->query($sql);
        return $result;
    }

    public function atualizaTemperatura($sensor, $temperatura_max)
    {
        $sql = "UPDATE tcc.temperatura_config SET temperatura_max = $temperatura_max WHERE id = $sensor";
        $result = $this->db->query($sql);
        return $result;
    }
}