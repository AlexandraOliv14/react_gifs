

export const getGifs = async(category) =>{
    const apyKey = 'Pb5pzPXbRfpAJoTY8VbOPk4hH82JZV7o';
    const limit = 10
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apyKey}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return{
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url//singno de interrogacion se acegura que venga algo

        }
    })
    return gifs;
}
