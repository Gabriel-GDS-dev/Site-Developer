document.addEventListener("DOMContentLoaded", function () {
  carregarProjetos();
});

function carregarProjetos() {
  const projetosSites = [
    {
      titulo: "Site JJ Eventos",
      descricao: "Site de eventos.",
      url: "https://jjeventoss.com.br"
    },
  ];

  const projetosMobile = [
    {
      titulo: "App Delivery Express",
      descricao: "Aplicativo de pedidos para restaurantes.",
      url: "https://play.google.com/store/apps/details?id=deliveryexpress"
    },
    {
      titulo: "App Finanças Pessoais",
      descricao: "Controle de gastos com gráficos e alertas.",
      url: "https://play.google.com/store/apps/details?id=financaspessoais"
    }
  ];

  inserirProjetos("projetos-sites", projetosSites);
  inserirProjetos("projetos-mobile", projetosMobile);
}

function inserirProjetos(containerId, lista) {
  const container = document.getElementById(containerId);
  if (!container) return;

  lista.forEach((projeto) => {
    // Cria o link se houver URL, senão só o card
    let wrapper;
    if (projeto.url) {
      wrapper = document.createElement("a");
      wrapper.href = projeto.url;
      wrapper.target = "_blank";
      wrapper.rel = "noopener noreferrer";
      wrapper.style.textDecoration = "none";
    } else {
      wrapper = document.createElement("div");
    }

    const card = document.createElement("section");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    card.appendChild(titulo);
    card.appendChild(descricao);
    wrapper.appendChild(card);
    container.appendChild(wrapper);
  });
}
// Função para modificar a url de um projeto específico
function modificarUrlProjeto(containerId, index, novaUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const wrappers = container.querySelectorAll('a, div');
  if (wrappers[index] && wrappers[index].tagName === 'A') {
    wrappers[index].href = novaUrl;
  }
}
