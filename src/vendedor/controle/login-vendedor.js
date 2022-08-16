$(document).ready(function() {

    $('.btn-login').click(function(e) {

        e.preventDefault();

        let dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/vendedor/modelo/login-vendedor.php',
            success: function(dados) {
                if(dados.tipo == 'success'){
                    $(location).attr('href', 'sistema.html')
                }else{
                Swal.fire({
                    title: 'e-rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            }}

        })
    })

})