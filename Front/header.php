<?php 
include('config.php');
$version = Config::getVersion();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<title>DigiDrive</title>
		<link rel="icon" href="img/icon.png" />
		<link rel="stylesheet" href="design.css" />
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
	</head>	
    <body>
    <header>
        <h1><a href="index.php">DigiDrive</a></h1>
        <h2>Evaluation de la maturité d’une entreprise face aux mutations</h2> 
		<div class="version">
			<p>Version <?php echo $version; ?></p>
		</div>
    </header>