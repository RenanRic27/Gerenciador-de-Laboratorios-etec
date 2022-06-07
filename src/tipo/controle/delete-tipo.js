$(document).ready(function() {
    $('#table-tipo').on('click', 'button.btn-delete', function(e) {


        e.preventDefault();

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'e-rifa',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButton: 'sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/tipo/modelo/delete-tipo.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'e-rifa',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipo').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})