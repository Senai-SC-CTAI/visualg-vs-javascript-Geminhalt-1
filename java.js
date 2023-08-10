function gema(){
var habitantes = prompt("Digite seu número de habitantes: ") 
var area = prompt("Digite sua área: ") 
var densidade

densidade = habitantes / area;

if (densidade >= 100) {
  alert("Densidade alta!!!");
} else if (densidade < 100 && densidade >= 25) {
  alert("Densidade media!!");
} else {
  alert("Densidade baixa");
}
}