 <?php
    $uname = $_GET['uname'];
    header("Content-type:text/html;charset=UTF-8");
    $coon = new mysqli("localhost","root","","shopping","3306");
    $coon->query("SET NAMES 'utf-8'");
    $coon->query("SET CHARACTER SET 'utf-8'");
    $sql = "SELECT tell FROM user_person WHERE tell='$uname'";
    $row = $coon->query($sql);
    $result = $row->fetch_assoc();
    if($result){
        echo 1;
   }else{
        echo 0;
   } 
        // echo 2;
?>