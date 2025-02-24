<?php
    require './conn.php';

    try{
        $data = json_decode(file_get_contents("php://input"), true);

        if(empty($data["syntax_name"]) || empty($data["syntax_description"]) || empty($data["language"]) || empty($data["example_code"])){
            throw new Exception("All fields are reqired");
        }

        $syntax_name = $data["syntax_name"];
        $syntax_description = $data["syntax_description"];
        $language = $data["language"];
        $example_code = $data["example_code"];
        $user_id = 2;

        $query = "INSERT INTO syntax_details (syntax_name, syntax_description, language, example_code, user_id) VALUES (?,?,?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('ssssi', $syntax_name, $syntax_description, $language,  $example_code, $user_id);
        $stmt->execute();

        echo json_encode(['message' => 'Encode Success successful!']);
    } catch (Exception $e) {
        // Return error response
        http_response_code(400); // Bad request
        echo json_encode(['message' => $e->getMessage()]);
    } finally {
        // Close the MySQLi connection
        $conn->close();
    }
?>