function aplicarDisplayDivContainer() {
    // Seleciona todos os botões de rádio do primeiro fieldset
    const opcoesContainer = document.getElementsByName("opContainer");

    // Percorre todos os botões de rádio
    for (let i = 0; i < opcoesContainer.length; i++) {
        // Verifica se o botão de rádio está marcado
        if (opcoesContainer[i].checked) {
            // Obtém o valor do botão de rádio selecionado
            let valorSelecionado = opcoesContainer[i].value;

            // Seleciona o elemento com o ID divContainer
            let divContainer = document.getElementById("divContainer");

            // Aplica o valor selecionado à propriedade CSS display do elemento divContainer
            divContainer.style.display = valorSelecionado;
            
            // Sai do loop pois já encontrou o botão selecionado
            break;
        }
    }
}

function restaurarPadraoDivContainer() {
    // Seleciona o botão radio com id "op3" do primeiro fieldset
    const op3c = document.getElementById("op3c");
    
    // Verifica se o botão radio existe
    if (op3c) {
        // Define a propriedade checked como true para selecionar o botão radio
        op3c.checked = true;
        
        // Aplica o tipo de display "block" à div com id "divContainer"
        const divContainer = document.getElementById("divContainer");
        if (divContainer) {
            divContainer.style.display = "block";
        }
    }
}

function aplicarDisplayDivInner() {
    // Seleciona todos os botões de rádio do primeiro fieldset
    const opcoesInner = document.getElementsByName("opInner");

    // Percorre todos os botões de rádio
    for (let i = 0; i < opcoesInner.length; i++) {
        // Verifica se o botão de rádio está marcado
        if (opcoesInner[i].checked) {
            // Obtém o valor do botão de rádio selecionado
            let valorSelecionado = opcoesInner[i].value;

            // Seleciona o elemento com o ID divContainer
            let divInner = document.getElementById("divInner");

            // Aplica o valor selecionado à propriedade CSS display do elemento divContainer
            divInner.style.display = valorSelecionado;
            
            // Sai do loop pois já encontrou o botão selecionado
            break;
        }
    }
}

function restaurarPadraoDivInner() {
    // Seleciona o botão radio com id "op3" do primeiro fieldset
    const op3i = document.getElementById("op3i");
    
    // Verifica se o botão radio existe
    if (op3i) {
        // Define a propriedade checked como true para selecionar o botão radio
        op3i.checked = true;
        
        // Aplica o tipo de display "block" à div com id "divContainer"
        const divInner = document.getElementById("divInner");
        if (divInner) {
            divInner.style.display = "block";
        }
    }
}
