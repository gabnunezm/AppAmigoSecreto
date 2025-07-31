let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        mostrarError('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        mostrarError('¡Este nombre ya está en la lista!');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarListaAmigos();
}

function mostrarError(mensaje) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = mensaje;
    document.querySelector('.input-section').appendChild(errorElement);
    setTimeout(() => errorElement.remove(), 3000);
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarError('Necesitas al menos 2 amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="amigo-secreto">Tu amigo secreto es: <strong>${amigoSecreto}</strong></span>
    `;
    resultado.appendChild(li);
}

function limpiarLista() {
    
    amigos = [];
    
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<li style="color: var(--color-button);">¡Lista limpiada correctamente!</li>';
    
    setTimeout(() => {
        resultado.innerHTML = '';
    }, 2000);
}