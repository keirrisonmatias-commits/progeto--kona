// Dados técnicos detalhados extraídos das fontes [1-3, 5]
const agroData = {
    abc: {
        titulo: "Plano ABC: Mitigação e Eficiência",
        texto: "O Plano ABC superou as expectativas, atingindo 154% da meta de expansão de área (54,8 milhões de hectares) e 113% da meta de mitigação de CO2eq. Tecnologias como Plantio Direto e FBN foram os pilares desse sucesso [3]."
    },
    ap: {
        titulo: "Agricultura de Precisão (AP)",
        texto: "Utiliza GPS e sensores para gerenciar a variabilidade do solo. Isso permite a aplicação diferenciada de insumos, reduzindo custos operacionais e minimizando a contaminação de lençóis freáticos e do solo [2]."
    },
    mip: {
        titulo: "Manejo Integrado de Pragas",
        texto: "O MIP prioriza a mortalidade natural das pragas. Sua adoção pode reduzir pulverizações em até 68%, gerando uma economia média de R$ 724,88 por hectare, mantendo a produtividade intacta [5]."
    },
    saf: {
        titulo: "Sistemas Agroflorestais (SAFs)",
        texto: "Manejo integrado que imita a sucessão ecológica das florestas. Na Amazônia, é uma alternativa vital para gerar renda sem desmatar, recuperando áreas degradadas e preservando a fauna e flora [1, 7, 10]."
    }
};

// Bibliografia baseada exclusivamente nas fontes do notebook
const referencias = [
    "SÃO PAULO (Estado). Secretaria do Meio Ambiente. Agricultura Sustentável. Cadernos de Educação Ambiental, 2014 [6].",
    "WIKIPÉDIA. Agrofloresta: Sistemas de uso sustentável da terra. 2025 [7].",
    "SEBRAE/PR. Certificações Ambientais: Sustentabilidade e Competitividade no Agronegócio. 2025 [8].",
    "IPEA. Desenvolvimento da Agricultura de Baixo Carbono no Brasil. Texto para Discussão 2638, 2021 [3].",
    "SSCROP/EMBRAPA. Manejo Integrado de Pragas (MIP): Guia para Produtores. 2025 [5].",
    "MIGALHAS. O Código Florestal e os desafios do agronegócio brasileiro. 2025 [9].",
    "BPBES. Relatório Temático sobre Agricultura, Biodiversidade e Serviços Ecossistêmicos. 2024 [1].",
    "REVISTA INTERFACE TECNOLÓGICA. Agricultura de Precisão na Otimização de Recursos. 2024 [2]."
];

function abrirDetalhe(chave) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = `<h2>${agroData[chave].titulo}</h2><p>${agroData[chave].texto}</p>`;
    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

function carregarRefs() {
    const lista = document.getElementById('lista-ref');
    referencias.forEach(ref => {
        const li = document.createElement('li');
        li.textContent = ref;
        lista.appendChild(li);
    });
}

// Inicialização
window.onload = carregarRefs;
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) fecharModal();
}
