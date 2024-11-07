let base = ''
let altura = ''
baseMaior = ''
let baseMenor = ''
let raio = ''
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
                base = prompt('digite o valor da base:')
                altura = prompt('digite o valor da altura:')
            function triangleArea(base, altura){
                return base * altura / 2
            }
            console.log(triangleArea())
            break
            case '2' :
                base = prompt('digite o valor da base:')
                altura = prompt('digite o valor da altura:') 
            function rectangleArea(base, altura){
                return base * altura
            }
            console.log(rectangleArea)
            break
            case '3' :
                base = prompt('digite o valor da base:') 
            function squareArea(base){
                return base * base
            }
            console.log(squareArea)
            break
            case '4' :
                baseMaior = prompt('digitye o valor da base maior:')
                baseMenor = prompt('digite o valor da base menor:')
                altura = prompt('digite o valor da altura:')
                function areaTrapeze(baseMaior, baseMenor, altura){
                    return (baseMaior + baseMenor) * altura / 2
                }
                console.log(areaTrapeze)
                break
                case '5' : 
                raio = prompt('digite o valor do raio:')
                function circleArea(raio){
                    return (raio * raio) * 3,14  
                }
                console.log(circleArea)
                break
                default :
                    console.log('saindo do programa...')
                
        }
    } while (option !== '6')
