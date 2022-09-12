<?php
include("broilerplate.php");
include('./php/login_page.php');

?>

<main>
    <div id="logincontainer">
        <h2>Login</h2>
        <?php
        if (!empty($login_err)) {
            echo '<div id="err_msg">' . $login_err . '</div>';
        }
        ?>
        <form action="login.php" method="POST" id="login-signup">
            <div>
                <label for="username">Username</label><br>
                <input type="text" name="username" class="textInfo" value="<?php $username ?>" size="50" placeholder="Username">
                <small class="invalid-feedback"><?php echo $username_err; ?></small>
            </div>
            <div>
                <label for="pass">Password</label><br>
                <input type="password" name="password" class="textInfo" size="50" placeholder="Password">
                <small class="invalid-feedback"><?php echo $password_err; ?></small>
            </div>
            <button type="submit" id="loginbtn">Login</button>
            <p>
                Don't have an account? <a href="signUp.php">Sign up now</a>
            </p>
        </form>
    </div>

</main>

<footer>
    <hr id="line2">
    <div id="copyright">
        <p>© Copy right 2022 Paws. All rights reserved.</p>
    </div>
</footer>
</body>

</html>