<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$to = "katyarado@yandex.ru";
$date = date ("d.m.Y");
$time = date ("h:i");
$from = $email;
$subject = "Заявка с сайта";

$msg="
Имя: $name /n
Почта: $email /n
Телефон: $phone /n";
mail($to, $subject, $msg, "From: $to ");
?>