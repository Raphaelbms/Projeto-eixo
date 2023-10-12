const baixar = document.getElementById('baixar');

// Adiciona um evento de mouseover para quando o mouse passar por cima do botão
baixar.addEventListener('mouseover', function() {
    baixar.classList.remove('clica');
    baixar.classList.add('selecionada');
});

// Adiciona um evento de mouseout para quando o mouse sair do botão
baixar.addEventListener('mouseout', function() {
    baixar.classList.remove('selecionada');
    baixar.classList.add('clica');
});
