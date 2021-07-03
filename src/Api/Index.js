// LINK DE API
const api = "https://restcountries.eu";

const fetchpaises = async () => {
    const endpoint = `${api}/rest/v2/all`;

    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    return data;
}

export default fetchpaises;

