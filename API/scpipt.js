fetch("https://api.nasa.gov/planetary/apod?api_key=CpgmymnVUBcbQdmgfbrk1UJUd67OVKudzQev74YC").then(response=>response.json()).then(info =>{
    document.querySelector('.copyright').innerHTML = 'Author: ' + info.copyright;
    document.querySelector('.date').innerHTML = info.date + ' Day';
    document.querySelector('.explanation').innerHTML = info.explanation;
    document.querySelector('.img').src = info.url;
})