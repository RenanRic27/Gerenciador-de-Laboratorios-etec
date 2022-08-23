<?php

session_start();

if(!isset($_SESSION['NOME']) && !isset($_SESSION['TIPO'])){
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Voce não esté autenticado no sistema'
    );
}else{
    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Seja Bem Vindo,  '.$_SESSION['NOME']
    );
}
echo json_encode($dados);