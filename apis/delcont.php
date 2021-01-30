<?php 
    require '../dbconnect/connection.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $useridvar  =  $_POST["fmuser_id"];   
        
        $mquerystate = "SELECT * FROM users WHERE user_id = '$useridvar'  ";
        $resque = mysqli_query($connectionvar, $mquerystate);

        // returns number of rows in the object resque 
        $numrows = mysqli_num_rows($resque) ;

        if ($numrows > 0) {
            // Querry results object converted to assiciative array 
            $arrayassoc = mysqli_fetch_array($resque, MYSQLI_ASSOC);
           
            // Accessing the arrays propeties 
            $item1 = $arrayassoc['user_id'];
            $item2 = uniqid();
    
            // $sqlinsert = "UPDATE users SET rantxt='$item2' WHERE user_id= '$useridvar' ";
            $deletesql = "DELETE FROM users WHERE user_id = '$useridvar'";
            if (mysqli_query($connectionvar, $deletesql)) 
            {
                $jsonformat = '[{"usder_id": "'. $item1 .'", "timedel": "'. $item2.'"}]';
                echo $jsonformat ;
            } 
            else 
            {
                echo mysqli_error($connectionvar);
            }
    
        }
        else {
            echo "Data Not Found"; 
        }
    }

?>