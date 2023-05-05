// seleciona os elementos html dos checkboxes
var checkFisica = document.getElementById("flexCheckDefaultFisica");
var checkJuridica = document.getElementById("flexCheckDefaultJuridica");

// seleciona os elementos html que devem ser exibidos ou ocultados
var contentFisica = document.getElementById("containerFisica");
var contentJuridica = document.getElementById("containerJuridica");

// adiciona um evento de clique a cada um dos checkboxes
checkFisica.addEventListener("click", function () {
  if (checkFisica.checked) {
    contentFisica.style.display = "block";
    contentJuridica.style.display = "none";
  } else {
    contentFisica.style.display = "none";
  }
});

checkJuridica.addEventListener("click", function () {
  if (checkJuridica.checked) {
    contentJuridica.style.display = "block";
    contentFisica.style.display = "none";
  } else {
    contentJuridica.style.display = "none";
  }
});

// verificando qual checkbox está marcada e desmarcar a outra
checkFisica.addEventListener("change", () => {
  if (checkFisica.checked) {
    checkJuridica.checked = false;
  }
});

checkJuridica.addEventListener("change", () => {
  if (checkJuridica.checked) {
    checkFisica.checked = false;
  }
});

//máscara de digitos para cpf e cnpj
$("#cpf").mask("999.999.999-99");
$("#cnpj").mask("99.999.999/9999-99");
$("#tel_fsc").mask("99999-9999");
$("#tel_jus").mask("99999-9999");

function verificaForcaSenha() {
  var numeros = /([0-9])/;
  var alfabeto = /([a-zA-Z])/;
  var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

  if ($('#pass_jus').val().length < 6) {
    $('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
  } else {
    if ($('#pass_jus').val().match(numeros) && $('#pass_jus').val().match(alfabeto) && $('#pass_jus').val().match(chEspeciais)) {
      $('#password-status').html("<span style='color:green'><b>Forte</b></span>");
    } else {
      $('#password-status').html("<span style='color:orange'>Médio, insira uma letra e um caracter especial</span>");
    }
  }

};

let btn = document.querySelector('.lnr-eye');

btn.addEventListener('click', function () {

  let input = document.querySelector('#pass_fsc');

  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});

function verificaCnpj() {
  const cnpj = $('#cnpj').val().replace(/\D+/g, ''); //captura o campo cnpj e substitui tudo que não é número por vazio

  if (!cnpj || cnpj.length !== 14) {
    $('#cnpj-status').html("<span style='color:red'>CNPJ inválido</span>");
    return;
  } // se nao tiver 14 digitos retorna inválido

  const sequencial = new RegExp(`${cnpj[0]}{14}|${cnpj[1]}{14}|${cnpj[2]}{14}|${cnpj[3]}{14}|${cnpj[4]}{14}|${cnpj[5]}{14}|${cnpj[6]}{14}|${cnpj[7]}{14}|${cnpj[8]}{14}|${cnpj[9]}{14}|${cnpj[10]}{14}|${cnpj[11]}{14}|${cnpj[12]}{14}|${cnpj[13]}{14}`);
  if (sequencial.test(cnpj)) {
    $('#cnpj-status').html("<span style='color:red'>CNPJ inválido</span>");
    return;
  } // se tiver digitos sequenciais como 1111 ou 0000 (por toda a extensao do cnpj) retorna inválido



  let sum = 0;
  let factor = 5;
  let checkDigit = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj[i]) * factor;
    factor = factor === 2 ? 9 : factor - 1;
  }

  checkDigit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);

  if (checkDigit !== parseInt(cnpj[12])) {
    $('#cnpj-status').html("<span style='color:red'>CNPJ inválido</span>");
    return;
  }
  //calcula o primeiro digito do cnpj e soma cada digito do cnpj multiplicado por 5 atraves do factor e alterna entre 9 e 2. se o digito verificador calculado for diferente do décimo terceiro digito do cnpj retorna invalido

  sum = 0;
  factor = 6;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj[i]) * factor;
    factor = factor === 2 ? 9 : factor - 1;
  }

  checkDigit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);

  if (checkDigit !== parseInt(cnpj[13])) {
    $('#cnpj-status').html("<span style='color:red'>CNPJ inválido</span>");
    return;
  }

  $('#cnpj-status').html("<span style='color:green'><b>CNPJ válido</b></span>");
};