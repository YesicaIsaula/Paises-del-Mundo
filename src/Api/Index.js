// LINK DE API
const api = "https://restcountries.eu";

export const fetchpaises = async () => {
    const endpoint = `${api}/rest/v2/all`;

    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    return data;
}

export const busquedaPais = async (name) => {
    try {
    const endpoint = `${api}/rest/v2/name/${name}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
    } catch(error){
        console.log(error);
    }
}

