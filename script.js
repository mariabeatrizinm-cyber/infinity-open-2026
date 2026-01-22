document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, 
        threshold: 0.2 
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));


    const scriptURL = "https://script.google.com/macros/s/AKfycbwAUx5a7DRrcpNFfTKlPlF6hjqig79k0TItxpKRIQNT6Bdjfz_dm_ybZWqiW3E3yVsR/exec";
    const form = document.getElementById('inscricaoForm');
    const btn = document.getElementById('btnEnviar');
    const modal = document.getElementById('modal');
    const closeModalBtn = modal.querySelector('button'); 

    form.addEventListener('submit', e => {
        e.preventDefault();
        

        modal.style.display = 'flex'; 
        

        btn.disabled = true;
        btn.innerText = "ENVIANDO...";


        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: new FormData(form)
        })
        .then(() => {

            form.reset();
            btn.disabled = false;
            btn.innerText = "Entrar no Mundo Invertido";
        })
        .catch(error => {
            console.error('Erro no envio:', error);

            alert('Ocorreu um erro ao registrar. Tente novamente.');
            modal.style.display = 'none';
            btn.disabled = false;
        });
    });


    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});