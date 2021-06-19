import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  console.log(foto)
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>fsvincius9@gmail.com</li>
          <li>991479705</li>
          <li>Rua Tindiba, 846</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
