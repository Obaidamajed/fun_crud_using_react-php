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
$sql = "DELETE  FROM contact WHERE id = :id";


$path = explode('/',$_SERVER['REQUEST_URI']);
$stmt =$conn->prepare($sql);
$stmt->bindParam(':id', $path[5]);
$stmt->execute();

// print_r($path);

if($stmt->execute()){
    $response = ['status'=>1,'message'=>'Record deleted successfully.'];
}else{
    $response = ['status'=>0,'message'=>'Failed to delete  record.'];

}
echo json_encode( $response);