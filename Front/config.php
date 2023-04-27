<?php

class Config
{
    private const BASE_URL = "localhost:5000/";

    public function getURL(){
        return $this->BASE_URL;
     }
}