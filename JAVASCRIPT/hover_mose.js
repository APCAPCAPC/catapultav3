function hide(object){
    if(object == "1"){
        document.getElementById("Memoria_1").innerHTML = "Memoria 1";
    }
    if(object == "2"){
        document.getElementById("Memoria_2").innerHTML = "Memoria 2";
    }
}
function show(object){
    if(object == "1"){
        document.getElementById("Memoria_1").innerHTML = "Feta per: Victor i Andres";
    }
    if(object == "2"){
        document.getElementById("Memoria_2").innerHTML ="Feta per: Arnau i Alex G.";
    }
}