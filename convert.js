const form = document.querySelector('#form'); 
const fromInput = document.querySelector('#fromInput'); 
const toInput = document.querySelector('#toInput'); 
form.addEventListener('submit', function (e) { 
    e.preventDefault(); 
    const formData = new FormData(e.target); 
    axios(`https://v2.convertapi.com/convert/${formData.get('from')}/to/${toInput.value}?Token=DG7evB9j`, { 
        method: 'POST', 
        data: formData, 
    }) 
    .then(data => { 
        imgCode = data.data.Files[0].FileData; 
        const img = document.querySelector('#img');
        const link = document.querySelector('#link');
        img.src = `data:image/${toInput.value};base64,` + imgCode;
        link.style.display = 'block';
        link.href = `data:image/${toInput.value};base64,` + imgCode;
    }) 
});