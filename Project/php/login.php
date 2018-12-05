<?php
     header("Content-type:text/html;charset=UTF-8");
     $json = file_get_contents("php://input");
     $json = json_decode($json);
     $name = $json->username;
     $psd = $json->password;

     $coon = new mysqli("localhost","root","","shopping",3306);
    $coon->query("SET CHARACTER SET 'utf-8'");
    $coon->query("SET NAMES 'utf-8'");

    $sql = "SELECT * FROM user_person WHERE tell='$name'";
    $row = $coon->query($sql);
    $result = $row->fetch_assoc();
    if($result){
        // if($result[0].psd==$psd){ 
        if($result['psd']==$psd){   //如果第15行用的是all的话，要改为$result【0】.pas
            //验证成功，跳转
            // echo "<script>location.href='../index.html'</script>";
            echo 1;
        }else{
            //验证失败，回到登陆页
            // echo "<script>location.href='../html/login.html'</script>";
            echo 0;
        }
    }
    else{
        //验证失败
        // echo "<script>alert('用户名不存在');location.href='login.html'</script>";
        echo 0;
    }
    
?>