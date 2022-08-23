$(document).ready(function() {

       $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            url: 'src/vendedor/modelo/validate-vendedor.php',
            success: function(dados) {
                if (dados.tipo == 'success') {
                Swal.fire({
                    title: 'e-rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            } else {
                $(location).attr('href', 'index.html')
            }


            }
        })
    })

