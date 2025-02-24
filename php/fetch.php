<?php
    require 'conn.php';

    try{
        $query = "SELECT * FROM syntax_details";
        $stmt = $conn->prepare($query);
        $stmt->execute();

        $result = $stmt->get_result();

        $data = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($data);
    }catch(Exception $e) {
        // Return error response
        http_response_code(400); // Bad request
        echo json_encode(['message' => $e->getMessage()]);
    } finally {
        // Close the MySQLi connection
        $conn->close();
    }

    
?>