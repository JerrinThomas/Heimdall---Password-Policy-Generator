<?php

$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '123';
$dbName = 'dsalt';
$dbC = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName)
        or die('Error Connecting to MySQL DataBase');
for($i=37;$i<=49;$i++)
{
$salt1=openssl_random_pseudo_bytes(33, $cstrong);
    $salt2=openssl_random_pseudo_bytes(30, $cstrong);
    $salt3=openssl_random_pseudo_bytes(30, $cstrong);
    $salt4=openssl_random_pseudo_bytes(30, $cstrong);
    $salt5=openssl_random_pseudo_bytes(30, $cstrong);
    $salt6=openssl_random_pseudo_bytes(30, $cstrong);
    $salt7=openssl_random_pseudo_bytes(30, $cstrong);
    $salt8=openssl_random_pseudo_bytes(30, $cstrong);
    $salt9=openssl_random_pseudo_bytes(30, $cstrong);
    $salt10=openssl_random_pseudo_bytes(30, $cstrong);
    $salt11=openssl_random_pseudo_bytes(30, $cstrong);
    $salt12=openssl_random_pseudo_bytes(30, $cstrong);
    $salt13=openssl_random_pseudo_bytes(30, $cstrong);
    $salt14=openssl_random_pseudo_bytes(30, $cstrong);
    $salt15=openssl_random_pseudo_bytes(30, $cstrong);
    $salt16=openssl_random_pseudo_bytes(30, $cstrong);
    $salt17=openssl_random_pseudo_bytes(30, $cstrong);
    $salt18=openssl_random_pseudo_bytes(30, $cstrong);
    $salt19=openssl_random_pseudo_bytes(30, $cstrong);
    $salt20=openssl_random_pseudo_bytes(30, $cstrong);
 
    
//echo $salt;

//$sql="INSERT INTO `seeds_warehouse`(`seq_no`,`books`,`idioms`, `poems`, `games`, `footballers`, `animals`, `birds`,`authors`, `gods`, `superheroes`, `magical_objects`, `celestial_objects`, `got_characters`, `dinosaurs`) VALUES('$i','$salt1','$salt2','$salt3','$salt9','$salt10','$salt11','$salt12','$salt13','$salt14','$salt15','$salt17','$salt18','$salt19','$salt20')"; 
    
    $sql="UPDATE seeds_warehouse SET `got_characters`=NULL WHERE seq_no='$i'";

  //  INSERT INTO seeds_warehouse(seq_no, books, songs, idioms, movies, tvshows, poems, games, footballers, animals, birds, insects, teams, authors, gods, superheroes, magical_objects, celestial_objects, got_characters, dinosaurs, plants, mal_songs, mal_movies)
//INSERT INTO `dsalt`.`test` (`test`) VALUES ('5');
//('".$salt1."','".$salt2."','".$salt3."','".$salt4."','".$salt5."','".$salt6."','".$salt7."','".$salt8."','".$salt9."','".$salt10."','".$salt11."','".$salt12."','".$salt13."','".$salt14."','".$salt15."','".$salt16."','".$salt17."','".$salt18."','".$salt19."','".$salt20."')"; 
if(mysqli_query($dbC,$sql))
    echo "success";
else 
    echo mysqli_error($dbC);
}
?>
