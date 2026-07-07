/**
 * Dados técnicos extraídos diretamente das fontes bibliográficas
 */
const dadosAgro = {
    abc: {
        titulo: "Impacto do Plano ABC",
        texto: "O Plano ABC atingiu 113% da meta de mitigação de CO2 esperada para 2020. A expansão de área de tecnologias sustentáveis chegou a 54,8 milhões de hectares, superando em 54% a meta inicial [2, 15, 16]."
    },
    ap: {
        titulo: "Agricultura de Precisão (AP)",
        texto: "Permite a aplicação diferenciada de insumos por área, reduzindo o uso de pesticidas e contaminação do solo, enquanto aumenta a produtividade através de drones e sensoriamento remoto [8, 17, 18]."
    },
    mip: {
        titulo: "Economia com o MIP",/**
 * Dados técnicos extraídos diretamente das fontes bibliográficas
 */
const dadosAgro = {
    abc: {
        titulo: "Impacto do Plano ABC",
        texto: "O Plano ABC atingiu 113% da meta de mitigação de CO2 esperada para 2020. A expansão de área de tecnologias sustentáveis chegou a 54,8 milhões de hectares, superando em 54% a meta inicial [2, 15, 16]."
    },
    ap: {
        titulo: "Agricultura de Precisão (AP)",
        texto: "Permite a aplicação diferenciada de insumos por área, reduzindo o uso de pesticidas e contaminação do solo, enquanto aumenta a produtividade através de drones e sensoriamento remoto [8, 17, 18]."
    },
    mip: {
        titulo: "Economia com o MIP",
        texto: "O Manejo Integrado de Pragas reduz pulverizações em até 68%, gerando uma economia média de R$ 724,88 por hectare, mantendo a produtividade equivalente [10, 19, 20]."
    },
    saf: {
        titulo: "Sistemas Agroflorestais (SAFs)",
        texto: "Esses sistemas permitem colheitas sucessivas de produtos diferentes ao longo do tempo, imitando a sucessão ecológica natural das florestas e recuperando solos degradados [21-23]."
    }
};

function exibirDados(chave) {
    const modal = document.getElementById('modalDados');
    document.getElementById('modal-titulo').innerText = dadosAgro[chave].titulo;
    document.getElementById('modal-texto').innerText = dadosAgro[chave].texto;
    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById('modalDados').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modalDados')) {
        fecharModal();
    }
}
        texto: "O Manejo Integrado de Pragas reduz pulverizações em até 68%, gerando uma economia média de R$ 724,88 por hectare, mantendo a produtividade equivalente [10, 19, 20]."
    },
    saf: {
        titulo: "Sistemas Agroflorestais (SAFs)",
        texto: "Esses sistemas permitem colheitas sucessivas de produtos diferentes ao longo do tempo, imitando a sucessão ecológica natural das florestas e recuperando solos degradados [21-23]."
    }
};

function exibirDados(chave) {
    const modal = document.getElementById('modalDados');
    document.getElementById('modal-titulo').innerText = dadosAgro[chave].titulo;
    document.getElementById('modal-texto').innerText = dadosAgro[chave].texto;
    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById('modalDados').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modalDados')) {
        fecharModal();
    }
}
