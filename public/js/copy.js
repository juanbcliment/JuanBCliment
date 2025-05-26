document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {

        const targetId = button.getAttribute('data-copy-target');
        const targetText = document.getElementById(targetId).textContent;

        navigator.clipboard.writeText(targetText).then(() => {
            console.log(`Texto copiado: ${targetText}`);

            const miniMessage = document.createElement('div');
            miniMessage.textContent = 'Copied';
            miniMessage.className = 'copy-message';
            document.body.appendChild(miniMessage);

           button.appendChild(miniMessage);



            
            setTimeout(() => {
                miniMessage.remove();
            }, 800);

        }).catch(err => {
            console.error('No se pudo copiar el texto: ', err);
        });
    });
});
