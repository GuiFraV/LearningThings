const api = "https://pokeapi.co/api/v2/pokemon?limit=151";
const domUl = document.getElementById("list");

const fetchData = async () => {
    try {
        const response = await fetch(api);
        const jsonData = await response.json();
        console.log(jsonData.results);
        displayPokemon(jsonData)
    } catch (error) {
        console.log("Error Fetching Data", error);
    }
};

fetchData();

const displayPokemon = (data) => {
    data.results.forEach(async (pokemon) => {
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        domUl.appendChild(li);
        console.log(pokemon.url);

        try {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();

            const img = document.createElement("img");
            img.src= `${pokemonData.sprites.front_shiny}`
            li.appendChild(img)

        } catch (error) {
            console.log("Error Fetching Pokemon Data", error);
        }
    });
}


const searchPokemon = async() => {

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch ressource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
    }catch(error){
        console.error(error);
    }


}