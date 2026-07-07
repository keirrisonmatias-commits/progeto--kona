const bibliografia = [
    "BPBES. Relatório Temático sobre Agricultura, Biodiversidade e Serviços Ecossistêmicos. 2024.",
    "IPEA. Desenvolvimento da Agricultura de Baixo Carbono no Brasil. Texto para Discussão 2638, 2021.",
    "SÃO PAULO (Estado). Secretaria do Meio Ambiente. Agricultura Sustentável. Cadernos de Educação Ambiental, 2014.",
    "SEBRAE/PR. Certificações Ambientais: Sustentabilidade e Competitividade no Agronegócio. 2025.",
    "EMBRAPA. Manejo Integrado de Pragas (MIP) na cultura da soja. 2018."
];

function carregarReferencias() {
    const lista = document.getElementById('lista-ref');
    bibliografia.forEach(ref => {
        let li = document.createElement('li');
        li.innerText = ref;
        lista.appendChild(li);
    });
}

// Inicializa a lista ao carregar a página
window.onload = carregarReferencias;
