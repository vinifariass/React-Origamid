import React, {Fragment} from 'react';

// const titulo = <h1>Esse é um titulo</h1>

// const estiloP = {
//   color: 'blue',
//   fontSize: '2rem'
// }
// const App = () => {
  
//     const random = Math.random()
//     const ativo = false
//     return (
//       <>
//       {titulo}
//       <p className={ativo ? 'ativo' : 'inativo'}>{random * 1000}/ 50</p >
//       </>
    
//   );
// }

// export default App;

// const luana = {
//   clientes: 'Luana',
//   idade: 27,
//   compras: [
//     {nome: 'Notebook', preco: 'R$: 2500'},
//     {nome: 'Geladeira', preco: 'R$: 3000'},
//     {nome: 'Smartphone', preco: 'R$: 1500'},
//   ],
//   ative: true,
// };

// const mario = {
//   clientes: 'Mario',
//   idade: 31,
//   compras: [
//     {nome: 'Notebook', preco: 'R$: 2500'},
//     {nome: 'Geladeira', preco: 'R$: 3000'},
//     {nome: 'Smartphone', preco: 'R$: 1500'},
//     {nome: 'Guitarra', preco: 'R$: 3500'},
//   ],
//   ative: false,
// }

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//   .map((item) => Number(item.preco.replace('R$', '')))
//   .reduce((a,b)=> a + b)

//   return (
//     <div>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>Situação:{' '}
//         <span style={{color: dados.ative ?'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span> </p>
//       <p>Total: R$ {total}</p>
//       {total > 10000 && <p>Você está gastando muito</p>}
//     </div>
//   )
// }

// export default App

  
// const App = () => {
//   const filmes = ['Before Sunrise', 'After Sunset', 'Before Midnight']
//   return <ul>
//     {filmes.map((filme, index) =>
//      (<li key={filme}>{filme}</li>))}</ul>
// }

// const produtos = [
//   {id: 1,
//   nome: 'Smartphone', 
//   preco: 'R$ 2000',
//   cores: ['#29d8d5', '#252a34', '#fc3766'],},
//   {id: 2,
//     nome: 'Notebook', 
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet', 
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f96786'],
//   },
// ]

// const App = () => {
//   const dados = produtos
//   .filter(({preco})=> Number(preco.replace('R$', '')) > 1500, 
//   );
//   return (
//     <section>
//       {dados.map(({id,nome,preco,cores}) => (
//         <div key={id}>
//           <h1>{nome}</h1>
//           <p>Preço: {preco}</p>
//           <ul>
//             {cores.map((cor) => (
//               <li style={{backgroundColor: cor, color:'white'}} key={cor}>
//                 {cor}
//               </li>
//             ) )}
//           </ul>
//         </div>
//       ))}
//     </section>
//   )
// }

// const App = () => {
//   function handleScroll(event){
//     console.log(event)
//   }
//   window.addEventListener('scroll',handleScroll)
//   return (
//     <div style={{height: '200vh'}}>
//       <button onClick={(event) => alert(event.target.innerText)} >Clique</button>
//     </div>
//   )
  
// }

import Header from './Header'
import Footer from './Footer'
import Form from './Form/Form';

const Teste = () => {
  const active = true;
  if (active) {
    return <p> Teste</p>
  }
  return null
}
const App = () => {
  return (
    <div>
      <Fragment>
        <Teste />
        <Header />
        <Form />
        <Form />
        <Form />

        <Footer />
      </Fragment>
      
    </div>
  )
}
export default App;