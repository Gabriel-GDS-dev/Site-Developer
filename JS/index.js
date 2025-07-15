
// Carrossel horizontal de projetos
document.addEventListener('DOMContentLoaded', function () {
    // Seta para o topo
    const scrollBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    scrollBtn.addEventListener('click', function () {
        // Animação mais lenta para subir
        const scrollDuration = 1200;
        const scrollStep = -window.scrollY / (scrollDuration / 16);
        function smoothScroll() {
            if (window.scrollY > 0) {
                window.scrollBy(0, scrollStep);
                requestAnimationFrame(smoothScroll);
            }
        }
        smoothScroll();
    });
    // Dados de projetos para teste
    const projetosWeb = [
        {titulo: 'Projeto 1', desc: 'Descrição do Projeto 1', tipo: 'Website', cor: 'card-blue'},
        {titulo: 'Projeto 2', desc: 'Descrição do Projeto 2', tipo: 'Website', cor: 'card-purple'},
        {titulo: 'Projeto 3', desc: 'Descrição do Projeto 3', tipo: 'Website', cor: 'card-orange'},
        {titulo: 'Projeto 4', desc: 'Descrição do Projeto 4', tipo: 'Website', cor: 'card-green'},
        {titulo: 'Projeto 5', desc: 'Descrição do Projeto 5', tipo: 'Website', cor: 'card-purple'},
        {titulo: 'Projeto 6', desc: 'Descrição do Projeto 6', tipo: 'Website', cor: 'card-blue'},
        {titulo: 'Projeto 7', desc: 'Descrição do Projeto 7', tipo: 'Website', cor: 'card-orange'},
        {titulo: 'Projeto 8', desc: 'Descrição do Projeto 8', tipo: 'Website', cor: 'card-green'},
        {titulo: 'Projeto 9', desc: 'Descrição do Projeto 9', tipo: 'Website', cor: 'card-purple'},
        {titulo: 'Projeto 10', desc: 'Descrição do Projeto 10', tipo: 'Website', cor: 'card-blue'}
    ];
    const projetosMobile = [
        {titulo: 'Projeto M1', desc: 'Descrição do Projeto M1', tipo: 'Mobile', cor: 'card-blue'},
        {titulo: 'Projeto M2', desc: 'Descrição do Projeto M2', tipo: 'Mobile', cor: 'card-orange'},
        {titulo: 'Projeto M3', desc: 'Descrição do Projeto M3', tipo: 'Mobile', cor: 'card-green'},
        {titulo: 'Projeto M4', desc: 'Descrição do Projeto M4', tipo: 'Mobile', cor: 'card-purple'},
        {titulo: 'Projeto M5', desc: 'Descrição do Projeto M5', tipo: 'Mobile', cor: 'card-blue'},
        {titulo: 'Projeto M6', desc: 'Descrição do Projeto M6', tipo: 'Mobile', cor: 'card-orange'},
        {titulo: 'Projeto M7', desc: 'Descrição do Projeto M7', tipo: 'Mobile', cor: 'card-green'},
        {titulo: 'Projeto M8', desc: 'Descrição do Projeto M8', tipo: 'Mobile', cor: 'card-purple'},
        {titulo: 'Projeto M9', desc: 'Descrição do Projeto M9', tipo: 'Mobile', cor: 'card-blue'},
        {titulo: 'Projeto M10', desc: 'Descrição do Projeto M10', tipo: 'Mobile', cor: 'card-orange'}
    ];

    function renderCarousel(trackId, projetos, visibleCount) {
        const track = document.getElementById(trackId);
        track.innerHTML = '';
        // Usar section para o wrapper, conforme HTML semântico
        const wrapper = document.createElement('section');
        wrapper.className = 'carousel-row';
        track.appendChild(wrapper);
        projetos.forEach((proj, i) => {
            const card = document.createElement('article');
            card.className = `project-card ${proj.cor}`;
            card.innerHTML = `<header><h4>${proj.titulo}</h4></header><p>${proj.desc}</p><footer><small class="project-type">${proj.tipo}</small></footer>`;
            wrapper.appendChild(card);
        });
    }

    function setupCarousel(trackId, projetos, arrowLeft, arrowRight, visibleCount) {
        let start = 0;
        function updateView() {
            const cards = document.querySelectorAll(`#${trackId} .project-card`);
            cards.forEach((card, i) => {
                card.style.display = (i >= start && i < start + visibleCount) ? 'flex' : 'none';
            });
            // Setas: desabilita se não pode navegar
            if (start === 0) {
                arrowLeft.disabled = true;
            } else {
                arrowLeft.disabled = false;
            }
            if (start + visibleCount >= projetos.length) {
                arrowRight.disabled = true;
            } else {
                arrowRight.disabled = false;
            }
        }
        arrowLeft.addEventListener('click', function () {
            if (start > 0) {
                start = Math.max(0, start - visibleCount);
                updateView();
            }
        });
        arrowRight.addEventListener('click', function () {
            if (start + visibleCount < projetos.length) {
                start = Math.min(projetos.length - visibleCount, start + visibleCount);
                updateView();
            }
        });
        renderCarousel(trackId, projetos, visibleCount);
        updateView();
    }

    // Web
    const webLeft = document.querySelectorAll('.carousel-container')[0].querySelector('.carousel-arrow.left');
    const webRight = document.querySelectorAll('.carousel-container')[0].querySelector('.carousel-arrow.right');
    setupCarousel('carousel-web', projetosWeb, webLeft, webRight, 4);

    // Mobile
    const mobLeft = document.querySelectorAll('.carousel-container')[1].querySelector('.carousel-arrow.left');
    const mobRight = document.querySelectorAll('.carousel-container')[1].querySelector('.carousel-arrow.right');
    setupCarousel('carousel-mobile', projetosMobile, mobLeft, mobRight, 4);
});
