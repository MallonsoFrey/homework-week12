const nameInput = document.querySelector('.name');
const linkInput = document.querySelector('.link');
const messageInput = document.querySelector('.message');
const button = document.querySelector('.form-button');
const resultName = document.querySelector('.result-name');
const resultImage = document.querySelector('.result-image');
const resultMessage = document.querySelector('.result-message');

function checkSpam(str) {
    return str.replace(/viagra/gi, '***');
}

function formatName(name) {
    let trimmedName = name.trim();
    let lowerName = trimmedName.toLowerCase().slice(1);
    let upperName = trimmedName.toUpperCase().slice(0, 1);
    let fullName = upperName + lowerName;
    return fullName;
}

button.addEventListener('click', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const link = linkInput.value;
    const message = messageInput.value;

    const formattedName = formatName(name);
    const cleanMessage = checkSpam(message);

    resultName.textContent = formattedName;

    if (link) {
        const img = document.createElement('img');
        img.src = link;
        img.alt = 'Avatar';
        resultImage.innerHTML = '';
        resultImage.appendChild(img);
    } else {
        alert('Please enter a valid image URL.');
    }

    resultMessage.textContent = cleanMessage;
});