<?php

class Api
{
    private const BASE_URL = "https://localhost:5000/";

    static private function callApi(String $url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $jsonContent = curl_exec($curl);
        $error = curl_error($curl);
        
        $arrList = json_decode($jsonContent);
        curl_close($curl);
        if ($error) {
            throw new Exception($error);
        }
        return $arrList;
    }
    
    static public function getEntreprises()
    {
        try {
            return Api::callApi(Api::BASE_URL . "entreprise");
        } catch (Exception $e) {
            throw new Exception($e);
        }
    }
}
