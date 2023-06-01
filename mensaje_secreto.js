function secreto(n){
    let pa = 0;
    let pu = 0;
    let frase2 = "";
    let mensaje = "";
    let desoculto = "";
    for(let i = 0;i<=n.length;i++){
        if(n.charAt(i) == "("){
            pa = i+1;
        }
        if(n.charAt(i) == ")"){
            pu = i-1;
        }
    }
    for(let i = pa;i<=pu;i++){
        mensaje += n[i];
    }
    frase2 = mensaje.split('').reverse().join("");
    desoculto = n.split('');
    let papu = 0;
    for(let i = pa;i<=pu;i++){
        desoculto[i] = frase2[papu];
		papu++;
    }
    desoculto[pa-1] = "";
	desoculto[pu+1] = "";
	desoculto = desoculto.join('');
	console.log(desoculto)
	return desoculto;
}
let entra;
let sale;

entra = prompt("Ingrese un mensaje","");

sale = secreto(entra);

document.write(sale);