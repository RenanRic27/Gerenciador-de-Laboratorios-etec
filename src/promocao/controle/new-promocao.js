
$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo promoção')

        $('.modal-body').load('src/promocao/visao/form-promocao.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-promocao').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-promocao').modal('hide')
    })
})