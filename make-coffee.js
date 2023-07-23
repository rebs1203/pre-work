const url = 'https://api.sampleapis.com/coffee/hot'

async function getData() {
    const response = await fetch(url)
    const data = await response.json()

    const mainDiv1 = document.getElementById('coffee-info')

    const mapData = data.map((item) => {
        let div = document.createElement('div');
        let list = item.ingredients.join(" - ");
        div.innerHTML = `<h2>${item.title}</h2>
        <p>${item.description}</p>
        <h4>Ingredients:</h4>
        <p>${list}</p>`;
        mainDiv1.appendChild(div);
    })
    
    return mapData
}

getData()
