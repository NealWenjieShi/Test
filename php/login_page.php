
<?php
$conn = new mysqli('localhost', 'root', '', 'bigbrother', '33061');
$username = $password = "";
$username_err = $password_err = $login_err = "";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // check if the username is empty
    if (empty(trim($_POST['username']))) {
        $username_err = "Please enter username";
    } else {
        $username = trim($_POST['username']);
    }

    // check if the password is empty
    if (empty(trim($_POST['password']))) {
        $password_err = "Please enter your password";
    } else {
        $password = trim($_POST['password']);
    }

    // validate username and password
    if (empty($username_err) && empty($password_err)) {
        $sql = "SELECT username, password FROM registration WHERE username = ?";

        if ($stmt = mysqli_prepare($conn, $sql)) {
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            // set parameters
            $param_username = $username;
            // attempt to execut the prepared statement
            if (mysqli_stmt_execute($stmt)) {
                // store the results
                mysqli_stmt_store_result($stmt);

                // check if username exits, if yes, then verify the password
                if (mysqli_stmt_num_rows($stmt) == 1) {
                    // bind result variables
                    mysqli_stmt_bind_result($stmt, $username, $hashed_password);
                    if (mysqli_stmt_fetch($stmt)) {
                        if (password_verify($password, $hashed_password)) {
                            // password is correct, start a new session
                            session_start();
                            // store data in session variables
                            $_SESSION['login'] = true;
                            $_SESSION['username'] = $username;
                            // redirect user to index page
                            header("location: index.php");
                            exit();
                        } else {
                            // password is not valid, display an error message
                            $login_err = "Invalid username or password";
                        }
                    }
                } else {
                    // username is not valid
                    $login_err = "Invalid username or password";
                }
            } else {
                echo "something went wrong, please try again later.";
            }
            // close statement
            mysqli_stmt_close($stmt);
        }
    }
    // close connection
    mysqli_close($conn);
}
