<?php
session_start();
require_once('./php/db_credentials.php');
require_once('./php/database.php');

if (!isset($_SESSION['login'])) {
    $_SESSION['login'] = false;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css" type="text/css">
    <link rel="stylesheet" href="./css/broilerplate.css" type="text/css">
    <link rel="stylesheet" href="./css/products.css" type="text/css">
    <script src="./js/validation.js" defer></script>
    <script src="./js/products.js" defer></script>
    <title>Welcome to Paws</title>
</head>


<body onload="loadAllPuppies(); loadAllKittens()">
    <header>
        <div id="indexgridcontainer">
            <div id="storename">
                Welcome to Paws
            </div>
            <div id="logincreatesearch">
                <?php
                if ($_SESSION['login']) {
                    echo $_SESSION['username'];
                    echo '&nbsp <a href="./php/logout.php"><span>Logout</span></a>';
                } else {
                    echo '<a id="login" href="login.php">Login</a>';
                    echo '<span>&nbsp or &nbsp</span>';
                    echo '<a id="sign-up" href="signup.php">Create account</a>';
                }
                ?>

            </div>
        </div>

        <div id="header2">
            <img src="image/logo/logo.png" id="logo" alt="logo">
            <a href="index.php" class="anchor">Home</a>
            <a href="puppies.php" class="anchor">Puppies</a>
            <a href="kittens.php" class="anchor">Kittens</a>
            <a href="contact.php" class="anchor">Contact us</a>
        </div>
        <hr id="line">
    </header>