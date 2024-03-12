function encriptar() {
    let i = 0; //para recorrer la cadena
    let contText;

    const texto = document.getElementById("textarea-HTML"); // tomamos text area
    contText = texto.value;

    if(contText === ""){
        document.querySelector(".mensaje-inicio").style.display = "unset";
        document.querySelector(".--ocultar").style.display = "none";
        return
    }
    document.querySelector(".mensaje-inicio").style.display = "none";
    while(i < contText.length){
        if(contText[i] === "a"){
            const derecha = contText.slice(i+1) //tomamos la parte derecha
            const izquierda = contText.slice(0, i)
            contText = izquierda + "ai" + derecha
            i += 2;
            continue;
        }
        if(contText[i] === "e"){
            const derecha = contText.slice(i+1) //tomamos la parte derecha
            const izquierda = contText.slice(0, i)
            contText = izquierda + "enter" + derecha
            i += 5;
            continue;
        }
        if(contText[i] === "i"){
            const derecha = contText.slice(i+1) //tomamos la parte derecha
            const izquierda = contText.slice(0, i)
            contText = izquierda + "imes" + derecha
            i += 4;
            continue;
        }
        if(contText[i] === "o"){
            const derecha = contText.slice(i+1) //tomamos la parte derecha
            const izquierda = contText.slice(0, i)
            contText = izquierda + "ober" + derecha
            i += 4;
            continue;
        }
        if(contText[i] === "u"){
            const derecha = contText.slice(i+1) //tomamos la parte derecha
            const izquierda = contText.slice(0, i)
            contText = izquierda + "ufat" + derecha
            i += 4;
            continue;
        }
        i++
    }
    document.querySelector(".--ocultar").style.display = "unset";
    document.getElementById("textarea-codificado").innerHTML = contText;
}

function desencriptar(){
    let contText;

    
    const texto = document.getElementById("textarea-HTML"); // tomamos text area
    contText = texto.value;
    if(contText === ""){
        document.querySelector(".mensaje-inicio").style.display = "unset";
        document.querySelector(".--ocultar").style.display = "none";
        return
    }

    document.querySelector(".mensaje-inicio").style.display = "none";

    contText = contText.replaceAll("ai", "a");
    contText = contText.replaceAll("enter", "e");
    contText = contText.replaceAll("imes", "i");
    contText = contText.replaceAll("ober", "o");
    contText = contText.replaceAll("ufat", "u");

    document.querySelector(".--ocultar").style.display = "unset";
    document.getElementById("textarea-codificado").innerHTML = contText;

}

function portapapeles(){
    const area = document.getElementById("textarea-codificado").innerHTML;

    navigator.clipboard.writeText(area)
        .then(()=>{alert("El texto se copio correctamente")})
        .catch(err => {
            alert("Algo salió mal, no se pudo copiar en el portapapeles")
        })
}