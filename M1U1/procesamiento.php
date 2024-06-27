<?php
$servername = "localhost";
$username = "admin";
$password = "root";
$dbname = "programadorwebavanzado";


$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar los campos
    $nombre = trim($_POST["nombre"]);
    $apellido = trim($_POST["apellido"]);
    $telefono = trim($_POST["telefono"]);
    $email = trim($_POST["email"]);
    $contenido = trim($_POST["contenido"]);

    if (empty($nombre) || empty($apellido) || empty($telefono) || empty($email) || empty($contenido) || strlen($contenido) < 10) {
        die("Por favor, complete todos los campos y asegúrese de que el contenido tenga al menos 10 caracteres.");
    }

   
    $stmt = $conn->prepare("INSERT INTO Contactos (nombre, apellido, telefono, email, contenido) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $nombre, $apellido, $telefono, $email, $contenido);

    
    if ($stmt->execute()) {
        echo "Nuevo registro creado con éxito";
    } else {
        echo "Error: " . $stmt->error;
    }

    
    $stmt->close();
}


$conn->close();
?>