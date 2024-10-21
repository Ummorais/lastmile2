const enterBtn = document.getElementById('enterBtn');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');
const welcomeContainer = document.getElementById('welcomeContainer');
const menuContainer = document.getElementById('menuContainer');
const contactInfo = document.getElementById('contactInfo');

// Evento de login
enterBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email.includes('@loggi')) {
        welcomeContainer.style.display = 'none'; // Esconde a tela de boas-vindas
        menuContainer.style.display = 'block'; // Mostra o menu
        errorMessage.style.display = 'none'; // Esconde mensagem de erro
    } else {
        errorMessage.style.display = 'block'; // Mostra mensagem de erro
    }
});

// Seleção de opções do menu
document.getElementById('option1').addEventListener('click', () => {
    showContactDetail('contactBackOffice');
});

document.getElementById('option2').addEventListener('click', () => {
    showContactDetail('contactLastMileTP');
});

document.getElementById('option3').addEventListener('click', () => {
    showContactDetail('contactCoordenador');
});

document.getElementById('option4').addEventListener('click', () => {
    showContactDetail('toolsLastMile');
});

// Função para mostrar detalhes do contato
function showContactDetail(contactId) {
    // Esconder todas as opções de contato
    const contactDetails = document.querySelectorAll('.contact-detail');
    contactDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Mostrar a opção selecionada
    document.getElementById(contactId).style.display = 'block';
    contactInfo.style.display = 'block'; // Mostra a seção de informações de contato
    menuContainer.style.display = 'none'; // Esconde o menu
}

// Voltar ao menu principal
document.getElementById('backToMenuBtn').addEventListener('click', () => {
    contactInfo.style.display = 'none'; // Esconde as informações de contato
    menuContainer.style.display = 'block'; // Mostra o menu novamente
});