const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';
const cloudPreset = 'lgfhhp6l';
const cloudUrl = 'https://api.cloudinary.com/v1_1/zuriel/upload'

const obtenerChiste = async() => {
    try {
        const resp = await fetch(jokeUrl);
        if(!resp.ok) throw 'No se puede realizar';
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};

    } catch (error) {
        throw error;
    }
};

const obtenerUsers = async() =>{
    const resp = await fetch(urlUsers);
    const {data:users} = await resp.json();
    return users;
};

const subirImagen = async (archivoSubir) =>{
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try{
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        });
        if (resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}
export{
    obtenerChiste,
    obtenerUsers,
    subirImagen
}

