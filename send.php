<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subscribeEmail = $_POST['subscribeEmail'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";

if ($phone && $email) {
    $title = "Новое обращение Ehya Store";
    $body = "
      <h2>Заявка на регистрацию</h2><br>
      <b>Имя:</b> $name<br>
      <b>Телефон:</b> $phone<br>
      <b>Почта:</b> $email<br>
    ";
} else {
    $title = "Новое обращение Ehya Store";
    $body = "
      <h2>Заявка на подписку</h2><br>
      <b>Почта:</b> $subscribeEmail  
    ";
}



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2; 
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.com'; // SMTP сервера вашей почты
    $mail->Username   = 'zhekadolgovoi@yandex.com'; // Логин на почте
    $mail->Password   = '05102020__zheka'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('zhekadolgovoi@yandex.com', 'Жека Долговой'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('hiiamdiv@yandex.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header("Location: thankyou.html");