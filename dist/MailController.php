<?php

require __DIR__ . '/vendor/autoload.php';

use Mailgun\Mailgun;

$mg = Mailgun::create('key-1715c074f053673f6e3c4c79e8595390');

$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$message = $_POST['message'];
# Now, compose and send your message.
# $mg->messages()->send($domain, $params);
$mg->messages()->send('frassinternational.com', [
  'from'    => $_POST['email'],
  'to'      => 'josh@darkroast.co',
  'subject' => 'A new contact from ' . $name,
  'html'    => 'Name: ' . $name . "\n" .
                'Comapny: ' . $comapny . "\n" .
                'Email: ' . $email . "\n" .
                'Phone: ' . $phone . "\n" .
                'Message: ' . $message . "\n"
]);
