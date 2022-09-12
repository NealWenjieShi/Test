
<?php
$conn = new mysqli('localhost', 'root', '', 'bigbrother', '33061');

$signup_err = "";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['pass'];
    $re_Password = $_POST['pass2'];

    if (!$conn) {
        error_log("Connection failed: " . mysqli_connect_errno());
    } else {
        $queryForDuplicate = "SELECT * FROM registration WHERE username = '$username'";
        $result = mysqli_query($conn, $queryForDuplicate);
        if (mysqli_num_rows($result) > 0) {
            $signup_err = "User name already exists, please use another username.";
        } else {
            $sql = "INSERT INTO registration (username, password) VALUES (?,?);";
            $stmt = mysqli_stmt_init($conn);

            if (!mysqli_stmt_prepare($stmt, $sql)) {
                header("location: signup.php?error=stmtfailed");
                exit();
            }

            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            mysqli_stmt_bind_param($stmt, "ss", $username, $hashed_password);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
            header("location: login.php");
            exit();
        }
    }
}
