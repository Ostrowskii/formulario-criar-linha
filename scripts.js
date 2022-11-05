 
    console.log("ola mundo");
    const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e){
    e.preventDefault();
    
    const name = document.querySelector("#name");       //busca o input de id name e guarda ele
    const vname = name.value;                           //guarda o valor na constante vname
    console.log(name.value);                            //mostra no console 
    
    const age = document.querySelector("#age");
    const vage = age.value;  
    console.log(age.value);
        
    const animeFavorito = document.querySelector("#animeFavorito");
    const vanimeFavorito = animeFavorito.value;  
    console.log(animeFavorito.value);
    
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdAnimeFavorito = document.createElement("td");
    
    tdName.innerHTML = vname;
    tdAge.innerHTML = vage;
    tdAnimeFavorito.innerHTML = vanimeFavorito;
        
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAnimeFavorito);
    
    const table = document.querySelector("#table");
    
    table.appendChild(tr);
    
    
    
//    const value = name.value;
//    console.log(value);
    
//    var radios = document.getElementsByName("sexo");
//    for (var i = 0; i < radios.length; i++) {
//    if (radios[i].checked) {
//        console.log("Escolheu: " + radios[i].value);
//    }}
//    
//      
})
