$(document).ready(() => {
    $('#Contact-form').on('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        $('#Contact-form [required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).css('border', '2px solid red');
            } else {
                $(this).css('border', '');
            }
        });

        if (!isValid) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        const formData = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            telefono: $('#telefono').val(),
            email: $('#email').val(),
            tipoContacto: $('#tipoContacto').val(),
            asunto: $('#asunto').val(),
            descripcion: $('#descripcion').val()
        };

        $.ajax({
            url: 'mensaje.txt',
            type: 'GET',
            success: (response) => {
                $('#mensaje').text(response);
            },
            error: (xhr, status, error) => {
                $('#mensaje').text('Hubo un error al enviar el formulario. Inténtelo de nuevo más tarde.');
            }
        });
    });
});
