let saldo = 4000;

//atualizar saldo
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

//coletar dados do formulario nova tranzação

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  //saber se todos os campos estão preenchidos

  if( !elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os campos da tranzação");
    return;
  }
});
