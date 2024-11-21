// script.js
document.getElementById('get-pokemon').addEventListener('click', function() {
    const selectedPokemon = document.getElementById('pokemon-select').value;
    const url = "https://pokeapi.co/api/v2/pokemon/" + selectedPokemon;
  
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Error al obtener los datos: " + response.status);
        }
        return response.json();
      })
      .then(function(data) {
        displayPokemonInfo(data);
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
  });
  
  function displayPokemonInfo(pokemon) {
    const container = document.querySelector('.container');
    let pokemonInfo = document.querySelector('.pokemon-info');
  
    if (!pokemonInfo) {
      pokemonInfo = document.createElement('div');
      pokemonInfo.classList.add('pokemon-info');
      container.appendChild(pokemonInfo);
    }
  
    pokemonInfo.innerHTML = 
      "<h2>" + capitalize(pokemon.name) + "</h2>" +
      "<img src='" + pokemon.sprites.front_default + "' alt='" + pokemon.name + "'>" +
      "<p><strong>Tipo:</strong> " + pokemon.types.map(function(type) {
        return capitalize(type.type.name);
      }).join(', ') + "</p>" +
      "<p><strong>Altura:</strong> " + (pokemon.height / 10) + " m</p>" +
      "<p><strong>Peso:</strong> " + (pokemon.weight / 10) + " kg</p>";
  }
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  