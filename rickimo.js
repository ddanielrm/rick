


let elementos = ''

fetch('https://rickandmortyapi.com/api/character')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data.results[0]);
    for (let i = 0; i < data.results.length; i++) { 
            console.log(data.results[i])
            elementos += `<li>
            <img src="${data.results[i].image}" class="imagen" >
            ${data.results[i].name} 
            ${data.results[i].status}
            </li>`;
        }
        document.getElementById('personajes').innerHTML = elementos;
    })

