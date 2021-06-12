import React from 'react'
import Input from './Form/Input'
import useForm from './Hooks/useForms'

const App = () => {

  const cep = useForm('cep')
  const email = useForm('email')

 

  function handleSubmit (event) {
    event.preventDefault()
    if(cep.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
      label="CEP" 
      id="cep"
       {...cep}
       type="text"
      placeholder="00000-000" />

<Input 
      label="Email" 
      id="email"
       {...cep}
       type="email"
      />
      <button>Enviar</button>

      
    </form>
  )
  
    // <form action="">
    //   {coresArray.map((cor,index) => <lable key={index} style={{ textTransform: 'capitalize' }}>
    //     <input type="checkbox" 
    //     value={cor}
    //     checked={cores.includes(cor)}

    //     onChange={handleChange}/>
    //     {cor}
    //   </lable>)}
    
    // </form>
 
// const formFields= [{
//   id: 'nome',
//   label: 'Nome',
//   type: 'text',
// },{
//   id: 'email',
//   label: 'Email',
//   type: 'email',
// }, 
// {id: 'senha',
//   label: 'Senha',
//     type: 'password',
//   } 
// , {id: 'cep',
// label: 'Cep',
//   type: 'text',
// }, {id: 'numero',
//   label: 'Numero',
//   type: 'text',}
// , 
// {
//   id: 'bairro',
//   label: 'Bairro',
//   type: 'text',},

//   {id: 'cidade',
//   label: 'Cidade',
//   type: 'text',},

//   {id: 'estado',
//   label: 'Estado',
//   type: 'text',}

// ]
// const forms = formFields.reduce((acc,field) => {
//   return {
//     ...acc, [field.id]: ''
//   }
// }, {})


// const App = () => {

//   const [form, setForm] = React.useState(
//     formFields.reduce((acc,field) => {
//       return {
//         ...acc, [field.id]: ''
//       }
//     }, {})
    
//   )

//   const [response, setResponse] = React.useState(null)

//   function handleChange({target}) {
//     const {id, value} = target
//     setForm({...form, [id]: value})
    
//   }

//   function handleSubmit(event){
//     event.preventDefault()
//     fetch('http://ranekapi.origamid.dev/json/api/usuario',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(form)
//     }).then(response => {
//       setResponse(response)
//     })

//   }


//   return (
//     <form onSubmit={handleSubmit}>
//     {formFields.map(({id,label,type}) => (
//       <div>
//         <label htmlFor={id}>{label}</label>
//       <input type={type} id={id} value={form[id]} onChange={handleChange}/>
//       </div>
//     )) }
//     {response ** response.ok && <p>Formulário Enviado</p>}
//     <button>Enviar</button>
//     </form>
    
//   )

}
export default App
