<?php
    //获取用户信息
    $name = $_POST['username'];
    $psd = $_POST['password'];
     //连接数据库
     header("Content-type:text/html;charset:UTF-8");
     $coon = new mysqli("localhost","root","","shopping","3306");
     $coon->query("SET CHARACTER SET 'utf-8'");
     $coon->query("SET NAMES 'utf-8'");
     $sql = "INSERT INTO user_person (tell,psd) VALUES ('$name','$psd')";
     $row = $coon->query($sql);
     if($row){
        echo "<script>alert('注册成功');location.href='../html/login.html'</script>";
        // ;location.href='login.html'</script>
    }else{
        echo "<script>alert('注册失败');location.href='../html/register.html'</script>";
    }
?>