// Dados reais extraídos das fontes do seu notebook
const informacoes = {
    abc: {
        titulo: "Plano ABC e ILPF",
        texto: "O Plano ABC atingiu 113% da sua meta de mitigação de CO2eq. A Integração Lavoura-Pecuária-Floresta (ILPF) aumentou 8 vezes em área desde 2005, sendo vital para recuperar pastagens degradadas [1, 12, 13]."
    },
    ap: {
        titulo: "Agricultura de Precisão (AP)",
        texto: "A AP utiliza sensores e SIG para aplicar insumos de forma variável. Isso reduz drasticamente a contaminação do solo e da água, aumentando a eficiência no uso de fertilizantes como Fósforo e Potássio [5, 14, 15]."
    },
    mip: {
        titulo: "Economia com o MIP",
        texto: "O Manejo Integrado de Pragas permite uma economia média de R$ 724,88 por hectare. Além de preservar inimigos naturais, reduz em até 68% a necessidade de pulverizações químicas [8, 16]."
    }
};

const fontes = [
    "BPBES (2024). Relatório Temático sobre Agricultura, Biodiversidade e Serviços Ecossistêmicos.",
    "IPEA (2021). Desenvolvimento da Agricultura de Baixo Carbono no Brasil. Texto para Discussão 2638.",
    "SEBRAE/PR (2025). Certificações Ambientais: Sustentabilidade e Competitividade.",
    "SSCrop (2025). Guia Prático de Manejo Integrado de Pragas (MIP).",
    "SMA-SP (2014). Cadernos de Educação Ambiental: Agricultura Sustentável.",
    "Migalhas (2025). O Código Florestal e os desafios do agronegócio brasileiro.",
    "Revista Interface Tecnológica (2024). Agricultura de Precisão na Otimização de Recursos."
];

// Função para carregar as referências sem erro
document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista-referencias');
    if (lista) {
        fontes.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            lista.appendChild(li);
        });
    }
});

function abrirModal(id) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = `<h2>${informacoes[id].titulo}</h2><p>${informacoes[id].texto}</p>`;
    modal.style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.onclick = (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) fecharModal();
};
