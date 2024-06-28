<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultados GET</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Resultados del Formulario GET</h1>
    <?php
        $ingrediente1 = htmlspecialchars($_GET['ingrediente1']);
        $ingrediente2 = htmlspecialchars($_GET['ingrediente2']);
        $ingrediente3 = htmlspecialchars($_GET['ingrediente3']);
        
        if (!empty($ingrediente1) && !empty($ingrediente2) && !empty($ingrediente3)) {
            echo "<p><strong>Dato 1:</strong> $ingrediente1</p>";
            echo "<p><strong>Dato 2:</strong> $ingrediente2</p>";
            echo "<p><strong>Dato 3:</strong> $ingrediente3</p>";
        } else {
            echo "<p>Faltan datos. Por favor, complete todos los campos.</p>";
        }
    ?>
</body>
</html>
