function triangleArea(triangleBase, triangleHeight){
    return triangleBase * triangleHeight / 2
}

function rectangleArea(rectangleBase, rectangleBase){
    return rectangleBase * rectangleBase
}

function squareArea(sideSquare){
    return sideSquare * sideSquare
}

    function areaTrapeze(baseLargest, baseSmallest, trapezoidHeight){
        return (baseLargest + baseSmallest) * trapezoidHeight / 2
    }
    
    function circleArea(circleRadius){
        return (circleRadius * circleRadius ) * 3,14  
    }

do {
    option = prompt(`
        calculo de formas geometricas
       voce deseja calcular:
       1 - area do triangulo;
       2 - area do retangulo;
       3 - area do quadrado;
       4 - area do trapezio;
       5 - area do circulo;
       6 -  sair;`)
       
        switch(option){
           case '1' :
            let triangleBase = prompt("Digite a base do triangulo:");
            let triangleHeight = prompt("Digite a altura do triangulo:");
            console.log(`A area do triangulo e: ${triangleArea}`)
            break;

           case '2' :
            let rectangleBase = prompt("Digite a base do retangulo:");
            let heightRectangle = prompt("Digite a altura do retangulo:");
            console.log(`A area do retangulo e: ${rectangleArea}`)
            break;

           case '3' : 
           let sideSquare = prompt("Digite o lado do quadrado:");
           console.log(`A area do circulo e: ${squareArea}`);
           break;

           case '4' :
            let baseLargest = prompt("Digite a base maior do trapezio:");
            let baseSmallest = prompt("Digite a base menor do trapezio:");
            let trapezoidHeight = prompt("Digite a altura do trapezio:");
            console.log(`A area do trapezio e: ${areaTrapeze}`)
            break;

           case '5' :
            let circleRadius = lerEntrada("Digite o raio do circulo:");
            console.log(`A area do circulo e: ${circleArea}`)
            break;

            case '6':
             console.log('saindo do programa...')

                    default : 
                    console.log('opcao invalida. tente novamente')
                
        }
    } while (option !== '6')
