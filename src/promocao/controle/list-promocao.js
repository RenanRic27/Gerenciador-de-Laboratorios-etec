$(document).ready(function() {
    $('#table-promocao').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/promocao/modelo/list-promocao.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        "columns": [{
                "data": 'ID',
                "className": 'text-center'
            },
            {
                "data": 'TITULO',
                "className": 'text-center'
            },
            {
                "data": 'DESCRICAO',
                "className": 'text-center'
            },
            {
                "data": 'VALOR_RIFA',
                "className": 'text-center'
            },
            {
                "data": 'ID',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="fa-solid fa-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i class="fa-solid fa-marker"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-delete"><i class="fa-solid fa-trash"></i></button>
                    `
                }
            }
        ]
    })
})