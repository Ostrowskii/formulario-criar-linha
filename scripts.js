 
    console.log("ola mundo");
    const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e){
    e.preventDefault();
    
    //1 - pegar o dado NOME
    const name = document.querySelector("#name");       //busca o input de id name e guarda ele
    const vname = name.value;                           //guarda o valor na constante vname
    console.log(name.value);                            //mostra no console 
    //pegar o dado AGE
    const age = document.querySelector("#age");
    const vage = age.value;  
    console.log(age.value);
    //pegar o dado ANIME FAVORITO
    const animeFavorito = document.querySelector("#animeFavorito");
    const vanimeFavorito = animeFavorito.value;  
    console.log(animeFavorito.value);
    
        
    //1.2 - receber o valor de checado ou não
    const feminino = document.querySelector("#feminino");
    const vfeminino = feminino.checked;  
    console.log("feminino.: " + vfeminino);
    
    const masculino = document.querySelector("#masculino");
    const vmasculino = masculino.checked;  
    console.log("masculino.: " + vmasculino);
    
    //1.3 - verificação true ou false para feminino e masculino
    var radios = document.getElementsByName("sexo");
    var vsexo;    
    for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        vsexo = radios[i].value;
        console.log("Escolheu: " + radios[i].value);
    }}
    
    //2 - criar elementos virtual tr e td e armazenar dentro das variaveis td...
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdAnimeFavorito = document.createElement("td");
    const tdSexo = document.createElement("td");  
    
    //3 - coloca as variaveis da etapa 1 e coloca nos elementos virtuais da etapa 2
    tdName.innerHTML = vname;
    tdAge.innerHTML = vage;
    tdAnimeFavorito.innerHTML = vanimeFavorito;
    tdSexo.innerHTML = vsexo;
    
    
    //adicionar os TD nos TR que vão conter na linha
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAnimeFavorito);
    tr.appendChild(tdSexo);
    
    //pegar onde fica a id table e adicionar o tr dentro da table.
    const table = document.querySelector("#table");
    table.appendChild(tr);
        
    
    
    
    
        
//    const value = name.value;
//    console.log(value);
    
//    var radios = document.getElementsByName("#sexo");
//    for (var i = 0; i < radios.length; i++) {
//    if (radios[i].checked) {
//        console.log("Escolheu: " + radios[i].value);
//    }}
//    
//      
})
