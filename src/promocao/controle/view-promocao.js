$(document).ready(function() {

    $('#table-promocao').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/promocao/modelo/visao-promocao.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/promocao/visao/form-promocao.html', function() {
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#TITULO').attr('readonly', 'true')
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#DESCRICAO').attr('readonly', 'true')
                        $('#DATA_INICIO').val(dado.dados.DATA_INICIO)
                        $('#DATA_INICIO').attr('readonly', 'true')
                        $('#DATA_FIM').val(dado.dados.DATA_FIM)
                        $('#DATA_FIM').attr('readonly', 'true')
                        $('#DATA_SORTEIO').val(dado.dados.DATA_SORTEIO)
                        $('#DATA_SORTEIO').attr('readonly', 'true')
                        $('#ARRECADACAO').val(dado.dados.ARRECADACAO)
                        $('#ARRECADACAO').attr('readonly', 'true')
                        $('#VALOR_RIFA').val(dado.dados.VALOR_RIFA)
                        $('#VALOR_RIFA').attr('readonly', 'true')
                        $('#ID').val(dado.dados.ID)
                        
                    })
                    $('.btn-save').hide()
                    $('#modal-promocao').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // promocao de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})