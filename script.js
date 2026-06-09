/**
 * As informações exibidas abaixo são baseadas nas descrições técnicas das fontes.
 */
const informacoes = {
    saf: "Os SAFs permitem colheitas sucessivas de produtos diferentes ao longo do tempo, reproduzindo a sucessão ecológica natural [14].",
    abc: "O Plano ABC atingiu 113% da sua meta de mitigação de CO2, provando ser eficaz na transição para uma economia de baixo carbono [6, 15].",
    mip: "O MIP pode reduzir custos com defensivos em até R$ 724,88 por hectare, mantendo a produtividade equivalente [16, 17].",
    ap: "A Agricultura de Precisão reduz o desperdício de insumos e diminui a contaminação do solo e da água [18, 19]."
};

function mostrarDetalhe(chave) {
    document.getElementById('texto-detalhe').innerText = informacoes[chave];
    document.getElementById('detalhes').style.display = "block";
}

function fecharModal() {
    document.getElementById('detalhes').style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    let modal = document.getElementById('detalhes');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
