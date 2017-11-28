<?php

require __DIR__ . '/vendor/autoload.php';


$mail = new PHPMailer;

$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail->setFrom($email, $name);
$mail->addAddress('josh@darkroast.co', 'Josh Stobbs');
$mail->addReplyTo('josh@darkroast.co', 'Josh Stobbs');
$mail->ReutrnPath='josh@darkroast.co';

$mail->isHTML(true);

$body = 'Name: ' . $name . "\n" .
        'Comapny: ' . $comapny . "\n" .
        'Email: ' . $email . "\n" .
        'Phone: ' . $phone . "\n" .
        'Message: ' . $message . "\n" . 

$mail->Subject = 'A new contact from' . $name;
$mail->Body    = $body;
$mail->AltBody = $body;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}