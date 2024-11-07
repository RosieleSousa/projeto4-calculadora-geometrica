
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
                let base1 = prompt('digite o valor da base:')
                let altura1 = prompt('digite o valor da altura:')
            function triangleArea(base1, altura1){
                return base1 * altura1 / 2
            }
            console.log(triangleArea())
            break
            case '2' :
                let base2 = prompt('digite o valor da base:')
                let altura2 = prompt('digite o valor da altura:') 
            function rectangleArea(base2, altura2){
                return base2 * altura2
            }
            console.log(rectangleArea)
            break
            case '3' :
               let base3 = prompt('digite o valor da base:') 
            function squareArea(base3){
                return base3 * base3
            }
            console.log(squareArea)
            break
            case '4' :
               let baseMaior = prompt('digitye o valor da base maior:')
               let baseMenor = prompt('digite o valor da base menor:')
                let altura3 = prompt('digite o valor da altura:')
                function areaTrapeze(baseMaior, baseMenor, altura3){
                    return (baseMaior + baseMenor) * altura3 / 2
                }
                console.log(areaTrapeze)
                break
                case '5' : 
                let raio = prompt('digite o valor do raio:')
                function circleArea(raio){
                    return (raio * raio) * 3,14  
                }
                console.log(circleArea)
                break
                default :
                    console.log('saindo do programa...')
                
        }
    } while (option !== '6')
