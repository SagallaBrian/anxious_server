<?php 
    require '../dbconnect/connection.php';
    date_default_timezone_set("Africa/Nairobi");

    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // start of post 
        $usernmavar  =  $_POST["fmusername"];    
        $usernmavar = preg_replace('/[^A-Za-z0-9\-,.]/', ' ',  $usernmavar);  
        
        // Removing annoying white spaces from the data 
        $usernmavar = preg_replace('/\s+/', ' ', $usernmavar);
        $sqlinsert = "INSERT INTO users (user_name) VALUES ('$usernmavar')";
        $item2 = date("Y-m-d H:i:s");
        
        if (mysqli_query($connectionvar, $sqlinsert)) 
        {
            $jsonformat = '[{"usder_name": "'. $usernmavar .'", "timeadded": "'. $item2.'"}]';
            echo $jsonformat;
        } 
        else 
        {
            echo mysqli_error($connectionvar);
        }
        
        mysqli_close($connectionvar);

        // end of post 
    }

?>