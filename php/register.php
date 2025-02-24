<?php
    require './conn.php';

    try{
        $data = json_decode(file_get_contents("php://input"), true);

        if(empty($data["username"]) || empty($data["email"]) || empty($data["password"])){
            throw new Exception("All fields are reqired");
        }

        $username = $data["username"];
        $email = $data["email"];
        $password = $data["password"];

        //hashed password
        $hashedPassword = password_hash($data["password"], PASSWORD_DEFAULT);

        $query = "INSERT INTO user_cred (username, email, password) VALUES (?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('sss', $username, $email, $hashedPassword);
        $stmt->execute();

        echo json_encode(['message' => 'Registration successful!']);
    } catch (Exception $e) {
        // Return error response
        http_response_code(400); // Bad request
        echo json_encode(['message' => $e->getMessage()]);
    } finally {
        // Close the MySQLi connection
        $conn->close();
    }
?>