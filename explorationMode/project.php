<?php

$includechar = array();
$avoidchar = array();
$includesym = array();
$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '123';
$dbName = 'heimdall';
$dblink = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName)
       or die('Error Connecting to MySQL DataBase');

function updatefreqTable($passwd){
 global $dblink;
    if(strchr($passwd," "))
        {
          $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(32)."';";
          $setresult = mysqli_query($dblink,$up);
        }
    if(strchr($passwd,"!"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(33)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"#"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(35)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"$"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(36)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"%"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(37)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"&"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(38)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"("))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(40)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,")"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(41)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"*"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(42)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"+"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(43)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,","))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(44)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"-"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(45)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"."))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(46)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"/"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(47)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"<"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(60)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"="))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(61)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,">"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(62)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"?"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(63)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"@"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(64)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"^"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(94)."';";
         $setresult = mysqli_query($dblink,$up);
       }
    if(strchr($passwd,"_"))
       {
         $up = "UPDATE freqtab SET freq = freq+1 where symbol = '".chr(95)."';";
         $setresult = mysqli_query($dblink,$up);
       }
}

function random(){ /* return ascii for upper or Lower char */
    $random = rand(0, 1) ? mt_rand(97,122) : mt_rand(65,90);
    return $random;
}

function findalpha(){
    global $includechar,$avoidchar;
    $includechar = array(0 => chr(random()),1 => chr(random()));
    $avoidchar = array(0 => chr(random()),1 => chr(random()));
    $k = 0;
    for($i=0;$i<2;$i++)
        while($includechar[$i] == $avoidchar[0] || $includechar[$i] == $avoidchar[1] )
        {
            $avoidchar = array(0 => chr(random()),1 => chr(random()));
            $k++;
            if($k == 100)
                break;
        }
}
function exploration(){
    global $dblink,$includesym;
    $q = "select * from freqtab where freq=(select min(freq) from freqtab);";
    $res = mysqli_query($dblink,$q);
    $no_rows = mysqli_num_rows($res);
    if( $no_rows == 1){
      $includesym = array(0 => $row["symbol"],1 => $row["symbol"]);
      $row = mysqli_fetch_assoc($res);
    }
    else {
      $possible = array();
      while($row = mysqli_fetch_assoc($res)){
          array_push($possible,$row["symbol"]);
      }
      $includesym = array(0 => $possible[mt_rand(0,$no_rows-1)],1 => $possible[mt_rand(0,$no_rows-1)]);
    }
    findalpha();
}
exploration();
echo "<br>Include Characters :-".$includechar[0]." , ".$includechar[1];
echo "<br>Avoid Characters :-".$avoidchar[0]." , ".$avoidchar[1];
echo "<br>Avoid Characters :-".$includesym[0]." , ".$includesym[1];

?>
