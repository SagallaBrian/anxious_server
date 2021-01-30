<?php
    require '../dbconnect/connection.php';

    $myquer = "SELECT * FROM users  ";
    $resque = mysqli_query($connectionvar, $myquer);

    $arrayassoc = mysqli_fetch_all($resque, MYSQLI_ASSOC);
    $jsonformat = json_encode($arrayassoc,  JSON_PRETTY_PRINT );

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    echo $jsonformat ;

?>

