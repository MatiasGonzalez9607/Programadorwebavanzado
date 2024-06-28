<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "recetasdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$user = htmlspecialchars($_POST['username']);
$email = htmlspecialchars($_POST['email']);
$pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

if (!empty($user) && !empty($email) && !empty($pass)) {
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user, $email, $pass);

    if ($stmt->execute()) {
        header("Location: register_success.html");
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Por favor, complete todos los campos.";
}

$conn->close();
?>
