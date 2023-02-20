<?php
if (isset($_POST['nome']))
	$nome = $_POST['nome'];
if (isset($_POST['email']))
	$email = $_POST['email'];
if (isset($_POST['mensagem']))
	$mensagem = $_POST['mensagem'];
if (isset($_POST['assunto']))
	$assunto = $_POST['assunto'];
if ($nome === '') {
	echo "Informe o seu nome!";
	die();
}
if ($email === '') {
	echo "Informe seu e-mail de contato!";
	die();
} else {
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "E-mail inválido!";
		die();
	}
}
if ($assunto === '') {
	echo "Informe o assunto!";
	die();
}
if ($mensagem === '') {
	echo "Mensagem precisa ser preenchida!";
	die();
}
$content = "De: $name \nE-mail: $email \nMensagem: $mensagem";
$recipient = "email@dominio.com"; // e-mail que vai receber os dados do formulário de contato
$mailheader = "From: $email \r\n";
mail($recipient, $assunto, $content, $mailheader) or die ("Erro!");
echo "E-mail enviado!";