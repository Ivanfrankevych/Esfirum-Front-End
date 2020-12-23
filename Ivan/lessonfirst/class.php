<?php
    class Car{
        private $name;
        private $color;
        private $price;
        function __construct($name,$color,$price){
            $this->name=$name;
            $this->color=$color;
            $this->price=$price;
        }
        function setName($name){
            $this->name=$name;
        }
        function getName(){
            return $this->name;
        }
        function setPrice($price){
            if($price>0){
                $this->price=$price;
            }else{
                echo 'price is invailable';
            }
        }
        function getPrice(){
            return $this->price;
        }
    }
    class SportCar extends Car{
        private $power;
        function __construct($name,$color,$price,$power){
            parent:: __construct($name,$color,$price);
            $this->power=$power;
        }
        function setPower($power){
            $this->power=$power;
        }
    }
    class Exclusive extends SportCar{
        private $passagers;
        function __construct($name,$color,$price,$power,$passagers){
            parent:: __construct($name,$color,$price,$power);
            $this->passagers=$passagers;
        }
    }
?>
