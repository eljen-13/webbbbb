function genererchiffrealeatoire(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function definirparametre(niveau){
    let tentativeMax,intervalleMin,intervalleMax;
    switch(niveau){
        case "facile":
            tentativeMax=10;
            intervalleMin=1;
            intervalleMax=100;
            break;
        case "intermediaire":
            tentativeMax=5;
            intervalleMin=1;
            intervalleMax=100;
            break;  
        case "difficile":
            tentativeMax=3;
            intervalleMin=1;
            intervalleMax=100;
            break;
        default:
            alert("Niveau inconnu veuillez choisir entre facile, intermediaire et difficile");
            return null ;}
    return  {tentativeMax,intervalleMin,intervalleMax};
}
function jouer(){
    let niveau=prompt("choisissez le niveau de difficulté entre facile, intermediaire et difficile");
    let parametre=definirparametre(niveau);
    if(parametre===null){
        return;
    }
    const {tentativeMax,intervalleMin,intervalleMax}=parametre;
    const chiffreAlea=genererchiffrealeatoire(intervalleMin,intervalleMax);
    let tentativesrestantes=tentativeMax;
    let trouve=false;
    while (tentativesrestantes>0 && !trouve){
        let message="veuillez saisir un chiffre entre "+intervalleMin+" et "+intervalleMax;
        if(tentativesrestantes<tentativeMax){
            message+="il vous reste "+tentativesrestantes+" tentatives";
        }
        const saisie=prompt(message);
        const chiffre=parseInt(saisie);
        if(chiffre<chiffreAlea){
            alert("c'est plus");
    }
        else if(chiffre>chiffreAlea){
            alert("c'est moins");
    }
        else{
            trouve=true;
            alert("bravo vous avez trouvé le chiffre "+chiffreAlea+" en "+(tentativeMax-tentativesrestantes)+"tentatives");
    }
        tentativesrestantes--;

    }
    if(!trouve){
        alert("vous avez perdu le chiffre était "+chiffreAlea);
    }
    let rejouer=prompt("voulez vous rejouer?");
    if(rejouer==="oui"){
        jouer();
    }
    else{
        alert("merci d'avoir jouer et au revoir")
    }
}
jouer();



