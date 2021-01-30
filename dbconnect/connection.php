<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $mydatabase = "myngovo";

    
    // Create connection
    $connectionvar = mysqli_connect($servername, $username, $password, $mydatabase);

    // Check connection
    if (!$connectionvar) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else
    {
        
    }
    

?>