document.addEventListener('DOMContentLoaded', function() {
    // Script de animação dos cards
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // O card será "visível" quando 20% dele estiver na tela
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Para a observação após a animação
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Script do formulário existente
    // ATENÇÃO: Verifique e insira a URL CORRETA do seu Google Apps Script aqui!
const scriptURL = 'https://script.google.com/macros/s/AKfycbyiWjzuLhjdLbC6Odhps_oD3pYBfpnFV04coXF8iHGWT6elz8y9XcABfs_1vLk-eva2/exec';    const form = document.getElementById('inscricaoForm');
    const btn = document.getElementById('btnEnviar');
    const modal = document.getElementById('modal');
    const closeModalBtn = modal.querySelector('button'); // Seleciona o botão dentro do modal

    form.addEventListener('submit', e => {
        e.preventDefault();
        btn.disabled = true;
        btn.innerText = "CRUZANDO O PORTAL...";

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: new FormData(form)
        })
        .then(() => {
            modal.style.display = 'flex';
            form.reset();
            btn.disabled = false;
            btn.innerText = "Entrar no Mundo Invertido";
        })
        .catch(error => {
            alert('Erro na conexão. O portal está instável.');
            btn.disabled = false;
            btn.innerText = "Entrar no Mundo Invertido";
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});