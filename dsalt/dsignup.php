<html>
<head>
<title>Dynamic Salt Test</title>
</head>  
<body>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
    User Name:<input type="text" name="uname" required><br>
    Email :<input type="email" name="email" required><br>
    Password:<input type="password" name="pwd" required><br>
    Most likeable Color: <br>
    <select name="color1" required>
        <option value="1" style="background:red">Red</option>
        <option value="2" style="background:green">Green</option>
        <option value="3" style="background:yellow">Yellow</option>
        <option value="4" style="background:blue">Blue</option>
        <option value="5" style="background:orange">Orange</option>
        <option value="6" style="background:purple">Purple</option>
        <option value="7" style="background:cyan">Cyan</option>
      
        <option value="8" style="background:lime">Lime</option>
        <option value="9" style="background:pink">Pink</option>
        <option value="10" style="background:teal">Teal</option>

        <option value="11" style="background:brown">Brown</option>
        <option value="12" style="background:beige">Beige</option>
        <option value="13" style="background:maroon">Maroon</option>
        <option value="14" style="background:mint">Mint</option>
        <option value="15" style="background:olive">Olive</option>
        <option value="16" style="background:coral">Coral</option>
        <option value="17" style="background:navy">Blue</option>
        <option value="18" style="background:grey">Grey</option>
        <option value="19" style="background:white">White</option>
        <option value="20" style="background:black">Black</option>
    </select><br>
    Next most likeable Color:<br>
    <select name="color2" required>
        <option value="1" style="background:red">Red</option>
        <option value="2" style="background:green">Green</option>
        <option value="3" style="background:yellow">Yellow</option>
        <option value="4" style="background:blue">Blue</option>
        <option value="5" style="background:orange">Orange</option>
        <option value="6" style="background:purple">Purple</option>
        <option value="7" style="background:cyan">Cyan</option>
      
        <option value="8" style="background:lime">Lime</option>
        <option value="9" style="background:pink">Pink</option>
        <option value="10" style="background:teal">Teal</option>

        <option value="11" style="background:brown">Brown</option>
        <option value="12" style="background:beige">Beige</option>
        <option value="13" style="background:maroon">Maroon</option>
        <option value="14" style="background:mint">Mint</option>
        <option value="15" style="background:olive">Olive</option>
        <option value="16" style="background:coral">Coral</option>
        <option value="17" style="background:navy">Blue</option>
        <option value="18" style="background:grey">Grey</option>
        <option value="19" style="background:white">White</option>
        <option value="20" style="background:black">Black</option>
    </select><br>
    <input type="submit" name="submit">      
    </form>
</body>
</html>
<?php

    
    $dbHost = 'localhost';
    $dbUser = 'root';
    $dbPass = '123';
    $dbName = 'dsalt';
    $dbC = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName)
        or die('Error Connecting to MySQL DataBase');




    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
    // collect value of input field
    $name = $_POST['uname'];
    $email=$_POST['email'];
    $pwd=$_POST['pwd'];
    
    $color1=($_POST['color1']);
    $color2=($_POST['color2']);
    }
    
    //echo "'$color2'";
    $login_time=date('Ymdhi',time());
    //echo "'$login_time'";
        
    $sql="INSERT INTO name_time_warehouse(`uname`,`email`,`logintime`) VALUES('$name','$email','$login_time')";
    mysqli_query($dbC,$sql);

    $sql="SELECT uid FROM name_time_warehouse WHERE uname='$name' AND email='$email'";
    $result=mysqli_query($dbC,$sql);
    $id=mysqli_fetch_row($result);
    
        
    $hash=salt_coord($name,$pwd,$login_time,$color1,$color2);
     function salt_coord($uname,$password,$login_time,$color1,$color2)
    {
        
        //DB connection    
        $dbHost = 'localhost';
        $dbUser = 'root';
        $dbPass = '123';
        $dbName = 'dsalt';
        $dbC = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName)
            or die('Error Connecting to MySQL DataBase');
        
        
        $x_1=$color1;
        $x_3=$color2;
       
        //x_2 and x_4 for randomness in selecting seed
        $x_2=$x_1+$x_1+$x_3;
        if($x_2>20)
            $x_2=fmod($x_2,20);
        else if($x_2==20)
            $x_2=20;
        else
            $x_2=$x_1+$x_1+$x_3;
       
        $x_4=$x_3+($x_1*$x_3);
        if($x_4>20)
            $x_4=fmod($x_2,20);
        else if($x_4==20)
            $x_4=20;
        else
            $x_4=$x_3+($x_1*$x_3);
        
      
       
        $sql="SELECT category FROM seed_map WHERE row_id='$x_1+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT count($cat[0]) FROM seeds_warehouse";
        $result=mysqli_query($dbC,$sql);
        $len1=mysqli_fetch_row($result);
        
        $sql="SELECT category FROM seed_map WHERE row_id='$x_2+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT count($cat[0]) FROM seeds_warehouse ";
        $result=mysqli_query($dbC,$sql);
        $len2=mysqli_fetch_row($result);
        
        $sql="SELECT category FROM seed_map WHERE row_id='$x_3+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT count($cat[0]) FROM seeds_warehouse";
        $result=mysqli_query($dbC,$sql);
        $len3=mysqli_fetch_row($result);
   
        $sql="SELECT category FROM seed_map WHERE row_id='$x_4+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT count($cat[0]) FROM seeds_warehouse";
        $result=mysqli_query($dbC,$sql);
        $len4=mysqli_fetch_row($result);
        
        $y_1=max($len1[0],$len2[0],$len3[0],$len4[0]);
        
        echo $login_time,strlen($login_time);
        
        $time_sum=array_sum(str_split($login_time));;
        //for($x=0;$x<12;$x++)
           // $time_sum+=substr($login_time,$x,1);
        
        echo "<br>";
        echo $time_sum;
        
        $y=$y_1*($time_sum);
              echo "<br>";
      
        if($y_1>$len1[0])
            $y_1_1=fmod($y_1,$len1[0]);
        else if($y_1==$len1[0])
            $y_1_1=$len1[0];
        else
            $y_1_1=$y_1;
       
        
        if($y_1>$len2[0])
            $y_1_2=fmod($y_1,$len2[0]);
        else if($y_1==$len2[0])
            $y_1_2=$len2[0];
        else
            $y_1_2=$y_1;
        
         
         $y_2_3=fmod($y,$len3[0]);
      //  echo "$y_2_3";
        $y_2_4=fmod($y,$len4[0]);
        echo "<br>";
       // echo "$y_2_4";

        $sql="SELECT category FROM seed_map WHERE row_id='$x_1+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT $cat[0] FROM seeds_warehouse WHERE seq_no='$y_1_1'";
        $result=mysqli_query($dbC,$sql);
        $seed1=mysqli_fetch_row($result);
    
        $sql="SELECT category FROM seed_map WHERE row_id='$x_2+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT $cat[0] FROM seeds_warehouse WHERE seq_no='$y_1_2'";
        $result=mysqli_query($dbC,$sql);
        $seed2=mysqli_fetch_row($result);
        
        $sql="SELECT category FROM seed_map WHERE row_id='$x_3+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT $cat[0] FROM seeds_warehouse WHERE seq_no='$y_2_3'";
        $result=mysqli_query($dbC,$sql);
        $seed3=mysqli_fetch_row($result);
      
        
        $sql="SELECT category FROM seed_map WHERE row_id='$x_4+1'";
        $result=mysqli_query($dbC,$sql);
        $cat=mysqli_fetch_row($result);
        $sql="SELECT $cat[0] FROM seeds_warehouse WHERE seq_no='$y_2_4'";
        $result=mysqli_query($dbC,$sql);
        $seed4=mysqli_fetch_row($result);
    
        echo "<br>";
        $new="$seed1[0].$seed3[0].$seed2[0].$seed4[0]";
        $pass=hash_pbkdf2("sha256", $password, $new, 1000);
        echo $pass ;
        return $pass;
    }

    $sql="INSERT INTO hash_warehouse(`uid`,`hashval`) VALUES('$id[0]','$hash')";
    mysqli_query($dbC,$sql);


?>
    