<?php

$name = $_POST["visitors-name"];
$email = $_POST["visitors-email"];
$message = $_POST["visitors-message"];
$email_body = "";

$email_body = $email_body . "Name: " . $name . "\n";
$email_body = $email_body . "eMail: " . $email . "\n";
$email_body = $email_body . "Mesage: " . $message . "\n";

// TODO: Send Email

header("Location: contact-thanks.php");

?>