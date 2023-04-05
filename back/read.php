<?php require('./config.php');?>

<?php
error_reporting(E_ALL);
ini_set('display_error',1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');


$object = new crud;
$conn = $object->connect();

$sql = "SELECT * FROM contact";

$path = explode('/',$_SERVER['REQUEST_URI']);

// print_r($path);
// print_r($_SERVER['REQUEST_URI']);

if(isset($path[6]) && is_numeric($path[6])){

    $sql .= "   WHERE id = :id";
    $stmt =$conn->prepare($sql);
    $stmt->bindParam(':id', $path[6]);
    $stmt->execute();
    $messages = $stmt->fetch();

}else {
    $stmt =$conn->prepare($sql);
    $stmt->execute();
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);




}

echo json_encode( $messages);




















