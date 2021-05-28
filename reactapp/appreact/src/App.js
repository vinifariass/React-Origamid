import React from 'react';

const titulo = <h1>Esse é um titulo</h1>
const App = () => {
  
    const random = Math.random()
    const ativo = false
    return (
      <>
      {titulo}
      <p className={ativo ? 'ativo' : 'inativo'}>{random * 1000}/ 50</p >
      </>
    
  );
}

export default App;
