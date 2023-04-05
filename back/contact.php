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

$method = $_SERVER['REQUEST_METHOD'];


$post = json_decode(file_get_contents('php://input'));
// The json_decode() function is used to decode or convert a JSON object to a PHP object.
// decode فك تشفير

$sql = "INSERT INTO contact ( id , name , email ,	subject , 	message ) VALUES ( null , :name, :email , :subject , :message)";
$stmt = $conn->prepare($sql);
$created_at = date('Y-m-d');
$stmt->bindParam(':name', $post->name);
$stmt->bindParam(':email', $post->email);
$stmt->bindParam(':subject', $post->subject);
$stmt->bindParam(':message', $post->message);

if($stmt->execute()){
    $response = ['status'=>1,'message'=>'Record created successfully.'];
}else{
    $response = ['status'=>0,'message'=>'Failed to created  record.'];

}

echo json_encode( $response);
// The json_encode() function is used to encode a value to JSON format.
// encode ترميز 

