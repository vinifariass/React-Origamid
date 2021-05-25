function handleMouse({clientX, clientY}) {
  console.log(clientX,clientY)
}

const frutas = ['Banana', 'Uva']

const [fruta1, fruta2] = frutas

const useQuadrado = [4, function (lado){
  return lado * 4
}]

const [lados, perimetro] = useQuadrado
console.log(lados)
console.log(perimetro(10))

document.addEventListener('click', handleMouse)