document.addEventListener("DOMContentLoaded", function () {
  carregarImagensInstagram();
  // criarProjetos(); // ainda desativado
});

// Substitua pelo seu Instagram Business ID real
const instagramUserId = "17841464353340993"; // Exemplo — use seu ID
const accessToken = "EAAScR6eYAJYBPEhvJt1cn9fHUMGj2AggjP7rMWNsDh2BgcCiU5JzYQcms0F28JCGxGwiqGClXZBhZCnFOvA1BxLZCwZCJOayzUr2TuaNzRoJtoP5ZBHr7xMT0dwYESmSVJsZAwbmntYzVCZAPBcv6FKa922g9hbR1pZBi4zohBLoo7MSojbWgvZCkGxYZAmNHaPibddb2Ca3px9xMu9LEEEtGknOApy08rfUJOYyatuPmXmO6A2eDmrRmAsH7VgGKH8rsETMx8fXe4ZBo00ERfZA";

async function carregarImagensInstagram() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "<p>Carregando imagens...</p>";

  try {
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
    const data = await res.json();

    if (!data.data) {
      gallery.innerHTML = "<p>Erro ao carregar imagens.</p>";
      console.error("Erro da API:", data);
      return;
    }

    gallery.innerHTML = ""; // limpa antes de adicionar

    data.data
      .filter(item => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM")
      .slice(0, 9) // Limita a 9 imagens
      .forEach(item => {
        const link = document.createElement("a");
        link.href = item.permalink;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = item.media_url;
        img.alt = "Imagem do Instagram";

        link.appendChild(img);
        gallery.appendChild(link);
      });
  } catch (erro) {
    gallery.innerHTML = "<p>Erro ao carregar imagens do Instagram.</p>";
    console.error(erro);
  }
}

// função de projetos desativada, mas mantida
function criarProjetos() {
  const projetos = [
    // { titulo: "Projeto Exemplo", descricao: "Texto", imagem: "img.jpg" }
  ];

  const lista = document.getElementById("project-list");

  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <img src="${projeto.imagem}" alt="${projeto.titulo}" />
    `;
    lista.appendChild(card);
  });
}
