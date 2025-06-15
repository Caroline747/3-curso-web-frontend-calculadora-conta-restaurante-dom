 let aplicarDesconto = false;

    function abrirModal() {
      document.getElementById("desconto-modal").style.display = "flex";
    }

    function fecharModal() {
        document.getElementById("desconto-modal").style.display = "none";
    }

    function responderDesconto(resposta) {
      aplicarDesconto = resposta;
      document.getElementById("desconto-modal").style.display = "none";
      calcularConta();
    }

    function calcularConta() {
      const valor = parseFloat(document.getElementById("valor").value);
      const incluirTaxa = document.getElementById("taxa").value === "sim";
      const pagantes = parseInt(document.getElementById("pagantes").value);

      if (isNaN(valor) || pagantes <= 0) {
        alert("Preencha os campos corretamente!");
        return;
      }

      let total = valor;

      if (incluirTaxa) {
        total *= 1.1; // +10% de taxa de serviço
      }

      const valorOriginal = total;
      let desconto = 0;

      if (aplicarDesconto) {
        desconto = total * 0.05;
        total -= desconto;

        alert(
          `Resumo da conta com desconto:\n\n` +
          `Valor original: R$ ${valorOriginal.toFixed(2)}\n` +
          `Desconto (5%): R$ ${desconto.toFixed(2)}\n` +
          `Valor final: R$ ${total.toFixed(2)}\n` +
          `Valor por pessoa: R$ ${(total / pagantes).toFixed(2)}`
        );
      } else {
        alert(
          `Resumo da conta sem desconto (Crédito):\n\n` +
          `Valor total: R$ ${valorOriginal.toFixed(2)}\n` +
          `Valor por pessoa: R$ ${(total / pagantes).toFixed(2)}`
        );
      }
    }


