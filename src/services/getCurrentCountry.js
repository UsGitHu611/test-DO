export const getCurrentCountry = async(name) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await response.json()
        return data; 
    } catch (error) {
        console.log(error);
    }
}