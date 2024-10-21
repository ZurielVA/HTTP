import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnAnother,olList;

const crearChisteHtml = () =>{
    const html = `
    <h1 class="mt-5">Jokes</h1>
    <br>
    <button class= "btn btn-primary">Another Joke</button>
    <ol class="mt-2 list-group">
    </ol>
    `;
    const divChistes = document.createElement('div');
    divChistes.innerHTML=html;
    body.append(divChistes);
};

const eventos = () =>{
    olList = document.querySelector('ol');
    btnAnother = document.querySelector('button');

    btnAnother.addEventListener('click', async()=>{

        btnAnother.disabled = true;
        drawJoke(await obtenerChiste());
        btnAnother.disabled = false; 
    });
};

const drawJoke = (joke) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
};

export const init = () =>{
    crearChisteHtml();
    eventos();
};
