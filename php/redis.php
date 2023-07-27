<?php
require "../vendor/predis/src/Autoloader.php";
Predis\Autoloader::register();
    
$redis = new Predis\Client(array(
    "scheme" => "tcp",
    "host" => "redis-15023.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    "port" => 15023,
    "password" => "VUHnmJAcvAQXKSWDFAOeIGaU0digrvJP"));
// echo "Connected to Redis";

?>