<?php
include("broilerplate.php");
include('./php/registration.php');
?>

<main>
    <div id="signupcontainer">
        <form id="form" action="signup.php" method="post" onsubmit="return validate();">
            <h2>Create account</h2>
            <?php
            if (!empty($signup_err)) {
                echo '<div id="err_msg">' . $signup_err . '</div><br>';
            }
            ?>
            <div class="logincontainer">
                <label for="email">Username</label><br>
                <input type="text" name="username" id="username" class="textInfo" size="50" placeholder="Username">
                <small></small>
            </div>

            <div class="logincontainer">
                <label for="pass">Password</label><br>
                <input type="password" name="pass" id="pass" size="50" class="textInfo" placeholder="Password">
                <small></small>
            </div>

            <div class="logincontainer">
                <label for="pass2">Re-type Password</label><br>
                <input type="password" name="pass2" id="pass2" class="textInfo" size="50" placeholder="Password">
                <small></small>
            </div>

            <div class="logincontainer">
                <input type="checkbox" name="terms" id="terms" onchange="return validateTerms()">
                <label for="terms">I agree to the terms and conditions</label>
                <small></small>
            </div>

            <button type=" submit" id="submitbtn">Sign-Up</button>
            <button type="reset" id="resetbtn">Reset</button>
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