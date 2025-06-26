document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const listaErros = document.querySelector('ul.erros');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        listaErros.innerHTML = '';

        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const assunto = form.querySelector('input[name="assunto"]').value.trim();
        const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

        const erros = [];
        // erros pra ir na lista
        if (nome.length < 2) {
            erros.push('O nome deve ter pelo menos 2 caracteres.');
        }

        if (assunto.length < 5) {
            erros.push('O assunto deve ter pelo menos 5 caracteres.');
        }

        if (mensagem.length < 2) {
            erros.push('A mensagem deve ter pelo menos 2 caracteres. (pelo menos um oi ne)');
        }

        // se tiver erro, pra cada um acrescenta uma li
        if (erros.length > 0) {
            erros.forEach(erro => {
                const li = document.createElement('li');
                li.textContent = erro;
                listaErros.appendChild(li);
            });
            return;
        }
        const li = document.createElement('li');
        li.textContent = 'Mensagem enviada!';
        li.style.color = '#bb86fc';
        listaErros.appendChild(li);
        form.reset();
    });
});
