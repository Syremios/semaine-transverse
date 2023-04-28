<?php

class Config
{
    public const BASE_URL = "localhost:5000/";
    private $version;

    public static function getURL(){
        return self::BASE_URL;
    }

    public static function getVersion(){
        return $version = "2.0.1";
    }
}