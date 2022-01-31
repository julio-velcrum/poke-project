let categoria = 'Ratón';
let tipo = 'ELÉCTRICO';
let habilidad = 'Electricidad estática';
let habilidadOculta = 'Pararrayos';
let peso = 6; //kg
let altura = 0.4 //mts

let pokemon = {
    id: 25,
    nombre: 'Pikachu',
    imagen: () => {
        fetch('https://pokeapi.co/api/v2/pokemon/25/')
        .then(response => response.json())
        .then(data => {
            document.getElementById("imagen").src = data.sprites.other.home.front_default;
        })
    },
    categoria: 'Ratón',
    tipo: 'ELÉCTRICO',
    habilidad: 'Electricidad estática',
    habilidadOculta: 'Pararrayos',
    peso: 6,
    altura: 0.4,
    obtenerIMC: () => peso / Math.pow(altura, 2),
    obtenerIMC2: function() {
        return this.peso / Math.pow(this.altura, 2);
    }
};

//console.log('variable peso es de tipo: ' + typeof(peso));

//function nombreDeLaFuncion() { }
//function() {}
// () => {}

function obtenerDatosPokemon() {
    // document.getElementById("categoria").value = categoria;
    // document.getElementById("tipo").value = tipo;
    // document.getElementById("habilidad").value = habilidad;
    // document.getElementById("haboculta").value = habilidadOculta;
    // document.getElementById("peso").value = peso;
    // document.getElementById("altura").value = altura;

    document.getElementById("nombre").innerHTML = pokemon.nombre;
    pokemon.imagen();
    document.getElementById("categoria").value = pokemon.categoria;
    document.getElementById("tipo").value = pokemon.tipo;
    document.getElementById("habilidad").value = pokemon.habilidad;
    document.getElementById("haboculta").value = pokemon.habilidadOculta;
    document.getElementById("peso").value = pokemon.peso;
    document.getElementById("altura").value = pokemon.altura;
    document.getElementById("imc").value = pokemon.obtenerIMC();

}
