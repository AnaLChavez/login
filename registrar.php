<?php
    header( 'Content-Type: application/json' );
    
    include( "conexion.php" );

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $email = $jsonObj["correo"];
    $user = $jsonObj["user"];
    $pass = $jsonObj["pass"];
    $passcon = $jsonObj["passcon"];
    
    $consulta = "INSERT INTO usuario(usuario, correo, pass,passcon)
                        VALUES ('" .$user . "',
                               '" .$email . "',
                                '" .$pass . "',
                                '" .$passcon . "',)";
    $res = $obj->registrarUsuario( $consulta );

    if( $res == 1){
        $response['status'] = 1;
    }
    else{
        $response['status'] = 0;
    }
    echo json_encode($response, JSON_FORCE_OBJECT);
?>