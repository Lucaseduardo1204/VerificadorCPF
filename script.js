function ValidarCPF() {
  let cpf = window.document.getElementsByClassName("cpf")[0].value;

  let arrayCPF = cpf.replace(/\D/g, "").split("");

  //Validando Números
  function validarNumerosIguais(arr) {
    const primeiroNumero = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== primeiroNumero) {
        return false;
      }
    }
    return true;
  }

  if (validarNumerosIguais(arrayCPF)) {
    alert("Por favor digite um número válido");
  } else {
    //Verificando o primeiro digito

    let somaPrimeiroNumero = 0;

    let pesoPrimeiroDigito = 2;

    for (let i = 9; i > 0; i--) {
      somaPrimeiroNumero += arrayCPF[i - 1] * pesoPrimeiroDigito;
      pesoPrimeiroDigito++;
    }

    let restoDivisaoPrimeiroNumero = somaPrimeiroNumero % 11;
    let primeiroDigito = 11 - restoDivisaoPrimeiroNumero;
    primeiroDigito > 9 ? (primeiroDigito = 0) : primeiroDigito;

    //Verificando o segundo digito

    let somaSegundoNumero = 0;
    let pesoSegundoDigito = 2;

    for (let i = 10; i > 0; i--) {
      somaSegundoNumero += arrayCPF[i - 1] * pesoSegundoDigito;
      pesoSegundoDigito++;
    }

    let restoDivisaoSegundoNumero = somaSegundoNumero % 11;
    let segundoDigito = 11 - restoDivisaoSegundoNumero;
    segundoDigito > 9 ? (segundoDigito = 0) : segundoDigito;

    if (primeiroDigito == arrayCPF[9] && segundoDigito == arrayCPF[10]) {
      alert("CPF válido");
    } else {
      alert("CPF Inválido");
    }
  }
}
