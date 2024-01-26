import axios from 'axios'

export const getDetailsApi = async (type: string) => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`)
    return response;
}