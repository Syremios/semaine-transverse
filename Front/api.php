<?php
class Api
{
    private const BASE_URL = "localhost:5000/";

    static private function callApi(String $url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $jsonContent = curl_exec($curl);
        $error = curl_error($curl);
        
        $arrList = json_decode($jsonContent,true);

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
            throw new Exception($error);
        }
    }

    static public function getEntreprise($id)
    {
        try {
            return Api::callApi(Api::BASE_URL . "entreprise/".$id);
        } catch (Exception $e) {
            throw new Exception($error);
        }
    }

    static public function getAxe()
    {
        try {
            return Api::callApi(Api::BASE_URL . "axe");
        } catch (Exception $e) {
            throw new Exception($error);
        }
    }

    static public function getAxes($id)
    {
        try {
            return Api::callApi(Api::BASE_URL . "axe/".$id);
        } catch (Exception $e) {
            throw new Exception($error);
        }
    }

    static public function getItem($ide, $ida)
    {
        try {
            return Api::callApi(Api::BASE_URL . "item/".$ide."/axe/".$ida);
        } catch (Exception $e) {
            throw new Exception($error);
        }
    }

    static public function getResultat($id)
    {
        try {
            return Api::callApi(Api::BASE_URL . "resultat/".$id);
        } catch (Exception $e) {
            throw new Exception($error);
        }
    }

    static public function getScore($id)
    {
        try {
            return Api::callApi(Api::BASE_URL . "entreprise/".$id."/score");
        } catch (Exception $e) {
            throw new Exception($error);
        }
    }
}
