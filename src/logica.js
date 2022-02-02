let pokemon = {
    id: 0,
    nombre: '',
    imagen: '',
    tipo: '',
    habilidad: function (abilities) {
        let habilidades = '';
        for (let posicion of abilities) {
            habilidades += posicion.ability.name + ', ';
            console.log(habilidades);
        }
        return habilidades;
    },
    peso: 0,
    altura: 0
};


function obtenerDatosPokemon() {

    let idPokemon = Math.floor(Math.random() * 386 + 252);

    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById("imagen").src = data.sprites.other.home.front_default;
            pokemon.id = data.id;
            pokemon.nombre = data.name;
            pokemon.imagen = data.sprites.other.home.front_default;
            pokemon.tipo = data.types[0].type.name;
            pokemon.peso = data.weight;
            pokemon.altura = data.height;

            console.log(pokemon);

            document.getElementById("nombre").innerHTML = pokemon.nombre;
            document.getElementById("imagen").src = pokemon.imagen;
            document.getElementById("tipo").value = pokemon.tipo;
            document.getElementById("habilidad").value = pokemon.habilidad(data.abilities);
            document.getElementById("peso").value = pokemon.peso;
            document.getElementById("altura").value = pokemon.altura;
        });
}
