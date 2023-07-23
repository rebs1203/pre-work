const url = 'https://api.sampleapis.com/coffee/hot'

async function getData() {
    const response = await fetch(url)
    const data = await response.json()

    const mainDiv = document.getElementById('coffee-menu')

    const mapData = data.map((item) => {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        let image = document.createElement('img');
        paragraph.innerHTML = item.title;
        image.src = item.image;
        mainDiv.appendChild(div);
        div.appendChild(paragraph);
        div.appendChild(image);
    })
    
    return mapData
}

getData()
