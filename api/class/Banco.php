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
        if (!$this->db) {
            die("Connection failed: " . mysqli_connect_error());
        }
    }

    public function close()
    {
        mysqli_close($this->db);
    }

    public function retornaTeste()
    {
        $sql = "SELECT * FROM tcc.teste";
        $result = $this->db->query($sql)->fetch_all(MYSQLI_ASSOC);
        return $result;
    }
}