<?php 
// Accquires MongoDB driver from vendor
require_once '../vendor/autoload.php'; 
require_once 'redis.php';

// $databaseCon = new MongoDB\Client; 


// Connecting to Database

$databaseCon = new MongoDB\Client('mongodb://localhost:27017'); 



// Connecting to specific DB

$myDatabase = $databaseCon -> profiledb;

// Connection to collections
$userCollection = $myDatabase -> users; 


// for checking connection 
// if ($userCollection){ 
//     echo "Collection ". $userCollection. "Connected"; 
// }
// else{ 
//     echo "Failed to Connect"; 
// }


// Getting Data From user 
$user_ID = "";
$name = "";
$workplace = "";
$age ="";
$contact="";
if(isset($_POST['send'])){ 
    $user_ID = $redis->get("user_ID");
    $name = $_POST['full-name']; 
    $workplace = $_POST['workplace']; 
    $age = $_POST['age']; 
    $contact = $_POST['contact']; 
} 


$data = array(
    "user-ID" => $user_ID,
    "fullName" => $name, 
    "workplace" => $workplace, 
    "age" => $age, 
    "contact" => $contact
);

// Inserting data into Mongodb 

$insert = $userCollection->insertOne($data); 

if($insert){ 
    echo "User Logged in and Profile Created Succesfully <br><br> " ;
    echo "User ID (from redis) :".$user_ID. "<br>"; 
    echo "Full Name: ".$name. "<br>"; 
    echo "Work Place: ". $workplace. "<br>"; 
    echo "Age: ".$age. "<br>"; 
    echo "Contact: ". $contact. "<br>"; 
}
else { 
    echo "Try Again";
}


?>
