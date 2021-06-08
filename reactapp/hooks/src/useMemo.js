import React from 'react';

function operacaoLenta() {
  let c;
  for(let i = 0; i < 100000000; i++) {
    c = i+i/10;
  }
  return c
}
const App = () => {
  const [contar,setContar] = React.useState(0)
  const t1 = performance.now()
  const valor = React.useMemo(()=> operacaoLenta(), [])
  
  const handleClick = React.useCallback(()=> {
    setContar(contar + 1)

  },[contar])
  // const valor = React.useMemo(()=>{
  //   const localItem = window.localStorage.getItem('preferido')
  //   console.log('Aconteceu o memo');
  //   return localItem
  // }, [])
  console.log(valor);
  console.log(performance.now() - t1);

  return (<div>
    <button onClick={()=> setContar(contar + 1)}>{contar}</button>
  </div>
  )
}
//   const [carrinho, setCarrinho] = React.useState(0)
//   const [notifications, setNotifications] = React.useState(null)
//   const timeoutRef = React.useRef()

//   let reference = 0;

//   function handleClick() {
//     setCarrinho(carrinho + 1)
//     setNotifications('Item adicionado ao carrinho')
//     timeoutRef.current = setTimeout(()=>{
//       setNotifications(null)
//      console.log('teste');

//     },2000)
//     console.log(timeoutRef.current);
//   }
  
//   return <div>
//     <p>{notifications}</p>
//     <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
//   </div>



// }
export default App






  //   const video = React.useRef()
//   const [comentarios, setComentarios] = React.useState([])
//   const [input, setInput] = React.useState('')
//   const inputElement = React.useRef()
   
//   React.useEffect(()=>{
//     console.log(video.current);
//   })

//   function handleClick () {
//     setComentarios([...comentarios, input])
//     setInput('')
//     inputElement.current.focus()
//   }
  
//   return <div>
//     <ul>
//       {comentarios.map(comentario => <li key={comentario}>{comentario}</li>)}
//     </ul>
//     <input type="text"
//     ref={inputElement}
//     value={input} onChange={({target})=> setInput(target.value)}/>
//     <button onClick={handleClick}>Enviar</button>
//   </div>

// }





  //   const [dados, setDados] = React.useState(null)
//   const [carregando, setCarregando] = React.useState(null)

//   async function handleClick(event) {
//     setCarregando(true)
//     const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
//     )
//     const json = await response.json()
//     setDados(json)
//     setCarregando(false)

//   }

//   return <div>
//     <button style = {{margin: '.5rem'}} onClick={handleClick}>notebook</button>
//     <button style = {{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
//     <button style = {{margin: '.5rem'}} onClick={handleClick}>tablet</button>
//     {carregando && <p>Carregando...</p>}
//     {!carregando && dados && <Produto dados={dados} />}
//   </div>
// }
