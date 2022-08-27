let score = prompt ('Ingrese la puntuación lograda');
if(score>0 && score<=100){
    while(score=true){
        let score = prompt ('Ingrese la puntuación lograda');
        if (score == 100){
            alert('Puntuación máxima, ¡felicidades!');
        }
        else{
            if(score>=70 && score<100){
                alert('Puntuación muy buena, faltó poco');
            }
            else{
                if(score>=1 && score<40){
                    alert('Puntuación mala, mucho por mejorar');
                }
                else{
                    if(score>=40 && score<70){
                        alert('Puntuación regular, falta mejorar');
                    }
                }
            }
        }
}
}
