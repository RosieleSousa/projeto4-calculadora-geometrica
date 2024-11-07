
let  option = ''

do {
    option = prompt(`
       areas geometricas calculadas ${result.length}
       voce deseja calcular:
       1 - area do triangulo;
       2 - area do retangulo;
       3 - area do quadrado;
       4 - area do trapezio;
       5 - area do circulo;
       6 -  sair;`)
       
        switch(option){
            case '1':
            function triangleArea(base, altura){
                return 3 * 6 / 2
            }
            console.log(triangleArea)
            break
            case '2' :
                 
            function rectangleArea(base, altura){
                return 12 * 5
            }
            console.log(rectangleArea)
            break
            case '3' : 
            function squareArea(base){
                return 5 * 5
            }
            console.log(squareArea)
            break
            case '4' :
                function areaTrapeze(baseMaior, baseMenor, altura){
                    return (10 + 10) * 2 / 2
                }
                console.log(areaTrapeze)
                break
                case '5' : 
                function circleArea(raio){
                    return (3 * 3 ) * 3,14  
                }
                console.log(circleArea)
                break
                default :
                    console.log('saindo do programa...')
                
        }
    } while (option !== '6')
