const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    generarLista();
    inputAmigo.value ="";
    inputAmigo.focus();

};

function generarLista(){
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
    const numRandom= Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto= listaAmigos[numRandom];
    ulResultado.innerHTML = "Tu amigo secreto es: " + amigoSecreto;
    alert("se ha seleccionado a tu amigo secreto");
    ulListaAmigos.textContent = "";
    listaAmigos.length = 0;
    inputAmigo.focus();
    

};




