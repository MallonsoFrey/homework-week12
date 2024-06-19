const button = document.querySelector('.button');
const result = document.querySelector('.result');

const alphabet = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];

button.addEventListener('click', function () {
    const index1 = Math.floor(Math.random() * alphabet.length);
    const index2 = Math.floor(Math.random() * alphabet.length);
    const index3 = Math.floor(Math.random() * alphabet.length);
    const index4 = Math.floor(Math.random() * alphabet.length);
    result.textContent = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];
    //index1 + index2 + index3 + index4 не сработало бы, оно возвращает сумму четырех случайных чисел (индексов), а не строку из букв
});
