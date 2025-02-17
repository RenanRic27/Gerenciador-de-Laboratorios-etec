<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/conn.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;

    // Verificação de campo obrigatórios do formulário
    if(empty($requestData['TITULO'])){
        // Caso a variável venha vazia eu gero um retorno de erro do mesmo
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO PROMOCAO (TITULO, DESCRICAO, DATA_INICIO, DATA_FIM, DATA_SORTEIO, ARRECADACAO, VALOR_RIFA) VALUES (:a, :b, :c, :d, :e, :f, :g)');
                $stmt->execute(array(
                    // ':a' => utf8_decode($requestData['NOME']),
                    ':a' => $requestData['TITULO'],
                    ':b' => $requestData['DESCRICAO'],
                    ':c' => $requestData['DATA_INICIO'],
                    ':d' => $requestData['DATA_FIM'],
                    ':e' => $requestData['DATA_SORTEIO'],
                    ':f' => $requestData['ARRECADACAO'],
                    ':g' => $requestData['VALOR_RIFA']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro salvo com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível salvar o registro: .'.$e
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare('UPDATE PROMOCAO SET TITULO = :a, DESCRICAO = :b, DATA_INICIO = :c, DATA_FIM = :d, DATA_SORTEIO = :e, ARRECADACAO = :f, VALOR_RIFA = :g WHERE ID = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    // ':a' => utf8_decode($requestData['NOME']),
                    ':a' => $requestData['TITULO'],
                    ':b' => $requestData['DESCRICAO'],
                    ':c' => $requestData['DATA_INICIO'],
                    ':d' => $requestData['DATA_FIM'],
                    ':e' => $requestData['DATA_SORTEIO'],
                    ':f' => $requestData['ARRECADACAO'],
                    ':g' => $requestData['VALOR_RIFA']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração do registro.'.$e
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);