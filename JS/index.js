document.addEventListener("DOMContentLoaded", function () {
  carregarProjetos();
});

function carregarProjetos() {
  const projetosSites = [
    {
      titulo: "Site Colina Verde",
      descricao: "Site com cardápio interativo e painel administrativo.",
    },
    {
      titulo: "Portfólio Developer",
      descricao: "Página pessoal com informações e contato.",
    },
    {
      titulo: "Landing Page Cauda de Dragão",
      descricao: "Exibição de fotos e link com Instagram.",
    },
  ];

  const projetosMobile = [
    {
      titulo: "App Delivery Express",
      descricao: "Aplicativo de pedidos para restaurantes.",
    },
    {
      titulo: "App Finanças Pessoais",
      descricao: "Controle de gastos com gráficos e alertas.",
    },
  ];

  inserirProjetos("projetos-sites", projetosSites);
  inserirProjetos("projetos-mobile", projetosMobile);
}

function inserirProjetos(containerId, lista) {
  const container = document.getElementById(containerId);
  if (!container) return;

  lista.forEach((projeto) => {
    const card = document.createElement("section");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    card.appendChild(titulo);
    card.appendChild(descricao);

    container.appendChild(card);
  });
}
