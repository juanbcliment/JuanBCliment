document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
       
        const targetId = button.getAttribute('data-copy-target');
        const targetText = document.getElementById(targetId).textContent;

        navigator.clipboard.writeText(targetText).then(() => {
            console.log(`Texto copiado: ${targetText}`);

            // Crear y mostrar el mini mensaje
            const miniMessage = document.createElement('div');
            miniMessage.textContent = '¡Texto copiado!';
            miniMessage.style.position = 'fixed';
            miniMessage.style.bottom = '20px';
            miniMessage.style.right = '20px';
            miniMessage.style.padding = '10px 15px';
            miniMessage.style.backgroundColor = '#4caf50';
            miniMessage.style.color = '#fff';
            miniMessage.style.borderRadius = '5px';
            miniMessage.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
            miniMessage.style.fontSize = '14px';
            miniMessage.style.zIndex = '1000';

            document.body.appendChild(miniMessage);

            // Eliminar el mensaje después de 2 segundos
            setTimeout(() => {
                miniMessage.remove();
            }, 2000);

        }).catch(err => {
            console.error('No se pudo copiar el texto: ', err);
        });
    });
});
