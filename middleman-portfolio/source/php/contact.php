// Contact Form

<?php

if($_POST){

	$name  = $_POST['name'];
	$email = $_POST['email'];
	$text  = $_POST['text'];
	$email_body = "";

	$email_body = $email_body . "Name: " . $name . "\n";
	$email_body = $email_body . "eMail: " . $email . "\n";
	$email_body = $email_body . "Mesage: " . $message . "\n";

	//send email
	mail("swetzoff@gmail.com", "subject",
	$email_body, "from:" . $email);

		
}
?>