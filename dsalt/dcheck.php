<?php

    
 

 salt_coord($name='atp',$pwd='123456',$login_time=date('Ymdhi',time()),$color1='13',$color2='18');
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
        echo "$y_2_3";
        $y_2_4=fmod($y,$len4[0]);
        echo "<br>";
        echo "$y_2_4";

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
        $new="$seed1[0].$seed3[0].$password.$seed2[0].$seed4[0]";

        echo $new;
        $pass=crypt($new);
        return $pass;
    }
?>