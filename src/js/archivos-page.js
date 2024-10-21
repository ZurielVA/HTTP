import { subirImagen } from "./http-provider";
let inputFile, imgPhoto;

const crearInputFileHtml = () => {
    const html = `
    <h1 class="mt-5">Subir archivo</h1>
    <hr>
    <label>Selecciona una fotografía</label>
    <input type="file" accept="image/png, image/jpeg, image/jpg"/>
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;
    
    const div = document.createElement('div');
    div.innerHTML = html;

    document.body.append(div);

    inputFile = document.querySelector('input');
    imgPhoto = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        subirImagen(file).then(url=>imgPhoto.src=url);
    });
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}