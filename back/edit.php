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



$post = json_decode(file_get_contents('php://input'));
$sql = "UPDATE  contact  SET   name = :name , email=:email ,	subject = :subject , 	message = :message  WHERE id = :id";
$stmt =$conn->prepare($sql);
$stmt->bindParam(':id', $post->id);
$stmt->bindParam(':name', $post->name);
$stmt->bindParam(':email', $post->email);
$stmt->bindParam(':subject', $post->subject);
$stmt->bindParam(':message', $post->message);

if($stmt->execute()){
    $response = ['status'=>1,'message'=>'Record updated successfully.'];
}else{
    $response = ['status'=>0,'message'=>'Failed to update  record.'];

}

echo json_encode( $response);