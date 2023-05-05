$().ready(function () {
    $("#formFisica").validate({
        onkeyup: false,
        onfocusout: false,
        rules: {
            razaoSocial: {
                required: true
            },
            cnpj: {
                required: true,
            },
            dddJuridica: {
                required: true,
                number: true,
                maxlength: 2
            },
            telJuridica: {
                required: true,
                minlength: 9
            },
            emailJuridica: {
                required: true,
                email: true,
            },
            confEmailJuridica: {
                required: true,
                email: true,
                equalTo: "#email_jus"
            },
            senhaJuridica: {
                required: true,
            },
            confSenhaJuridica: {
                required: true,
                equalTo: "#pass_jus"
            },
            checkboxJuridica: {
                required: true
            }
        },
        messages: {
            razaoSocial: {
                required: "Esse campo não pode ser vazio"
            },
            cnpj: {
                required: "Esse campo não pode ser vazio",
            },
            dddJuridica: {
                required: "Esse campo não pode ser vazio",
                minlength: jQuery.validator.format("Digite um ddd válido")
            },
            telJuridica: {
                required: "Esse campo não pode ser vazio",
                number: "Esse campo só aceita números",
                minlength: jQuery.validator.format("Digite um número de telefone válido")
            },
            emailJuridica: {
                required: "Esse campo não pode ser vazio",
                email: "Digite um endereço de e-mail válido"
            },
            confEmailJuridica: {
                required: "Esse campo não pode ser vazio",
                email: "Digite um endereço de e-mail válido",
                equalTo: "Os e-mails não correspondem"
            },
            senhaJuridica: {
                required: "Esse campo não pode ser vazio"
            },
            confSenhaJuridica: {
                required: "Esse campo não pode ser vazio",
                equalTo: "As senhas não correspondem"
            },
            checkboxJuridica: {
                required: "Você deve aceitar nossas políticas de privacidade"
            }
        },
    });
})

$(document).ready(function () {
    $("formJuridica").validate({
        onkeyup: false,
        onfocusout: false,
        rules: {
           
        },
        messages: {
            
        }
    });
})

//rotina limite caracteres em campos especificos
$(document).ready(function () {
    var maxLength = 2; // limite de caracteres desejado
    $('#ddd_fsc').on('input', function () { //seleciona o campo em que o limite será aplicado o que ele é
        if ($(this).val().length > maxLength) { // verifica se o número de caracteres é maior que o limite desejado
            var truncated = $(this).val().slice(0, maxLength); // tranca o valor do campo de input
            $(this).val(truncated); // define o valor trancado de volta no campo de input
        }
    });
});

$(document).ready(function () {
    var maxLength = 9; 
    $('#tel_fsc').on('input', function () { 
        if ($(this).val().length > maxLength) { 
            var truncated = $(this).val().slice(0, maxLength); 
            $(this).val(truncated); 
        }
    });
});


$(document).ready(function () {
    var maxLength = 2;
    $('#ddd_jus').on('input', function () {
        if ($(this).val().length > maxLength) {
            var truncated = $(this).val().slice(0, maxLength);
            $(this).val(truncated);
        }
    });
});

$(document).ready(function () {
    var maxLength = 9; 
    $('#tel_jus').on('input', function () { 
        if ($(this).val().length > maxLength) { 
            var truncated = $(this).val().slice(0, maxLength); 
            $(this).val(truncated); 
        }
    });
});




  


  





