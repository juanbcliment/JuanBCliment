document.getElementById('copy-button').addEventListener('click', () => {

    const emailText = document.getElementById('email-text').textContent;


    navigator.clipboard.writeText(emailText)
        .then(() => {
            alert('¡Email copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar:', err);
        });
});