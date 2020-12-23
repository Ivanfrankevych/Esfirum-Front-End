<?php include 'class.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <?php 
    $honda=new Car("Honda","Red","3000$");
    $BMW=new Car("BMW","Black","8000$");
    $honda->setName("New name");
    $name=$honda->getName();
    $Maseratti=new SportCar('Maseratti','Yellow',100000,500);
    $myArr= array(
        new Car("Honda","Red","3000$"),
        new SportCar('Maseratti','Yellow',100000,500),
        new Exclusive('Bugattu','Black',20000,900,5)
    );
var_dump($myArr);
//    $name = $myArr[1]->getName();
//    echo $name;
    ?>
</body>

</html>
