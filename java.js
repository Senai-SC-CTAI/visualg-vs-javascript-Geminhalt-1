function gema(){
var habitantes = parseInt(prompt("Digite seu número de habitantes: "));
var area = parseInt(prompt("Digite sua área: "));
var densidade

densidade = habitantes / area;

if (isNaN(densidade)) {
  alert("Só pode digitar número seu idiota.");
}
if (densidade >= 100) {
  alert("Densidade alta!!!");
} else if (densidade < 100 && densidade >= 25) {
  alert("Densidade media!!");
} else if (densidade < 25){
  alert("Densidade baixa");
}
}


