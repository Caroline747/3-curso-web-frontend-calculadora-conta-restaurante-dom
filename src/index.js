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
      let valorFinal = valorOriginal;

      if (aplicarDesconto) {
        desconto = valorOriginal * 0.1; // 10% de desconto
        valorFinal -= desconto;
        mostrarModalComDesconto(
          valorOriginal,
          desconto,
          valorFinal,
          valorFinal / pagantes
        );
      } else {
        mostrarModalSemDesconto(valorOriginal, valorOriginal / pagantes);
      }
    }

    function mostrarModalComDesconto(
      valorOriginal,
      desconto,
      valorFinal,
      valorPorPessoa
    ) {
      const texto = `
    <p><strong>Valor original:</strong> R$ ${valorOriginal.toFixed(2)}</p>
    <p><strong>Desconto (10%):</strong> R$ ${desconto.toFixed(2)}</p>
    <p><strong>Valor final:</strong> R$ ${valorFinal.toFixed(2)}</p>
    <p><strong>Valor por pessoa:</strong> R$ ${valorPorPessoa.toFixed(2)}</p>
  `;
      document.getElementById("texto-com-desconto").innerHTML = texto;
      document.getElementById("modal-com-desconto").style.display = "flex";
    }

    function mostrarModalSemDesconto(valorOriginal, valorPorPessoa) {
      const texto = `
    <p><strong>Valor total:</strong> R$ ${valorOriginal.toFixed(2)}</p>
    <p><strong>Valor por pessoa:</strong> R$ ${valorPorPessoa.toFixed(2)}</p>
  `;
      document.getElementById("texto-sem-desconto").innerHTML = texto;
      document.getElementById("modal-sem-desconto").style.display = "flex";
    }

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}



