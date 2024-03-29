import { useState } from 'react'
import './Article5.css'

function Article5() {
  const [formStep, setFormStep] = useState(1)

  return (
    <article className='articile_no5'>
      <section className='content'>
        <header className='headlines'>
          <h2 className='headline'>Contacto</h2>
          <p className='headline2'>
            Contacta directamente con nosotros a través de nuestro correo
            electrónico o teléfono.
          </p>
        </header>
      </section>
      <div className='contactInfo'>
        <div className='phone'>
          <i className='fa-solid fa-phone-volume'></i>
          <p>+34 656960916</p>
        </div>
        <div className='phone'>
          <i className='fa-solid fa-envelope'></i>
          <p>totoluzuriaga22@gmail.com</p>
        </div>
      </div>
      <div className='redes'>
        <h3>Redes Sociales</h3>
        <i className='fa-brands fa-instagram'></i>
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-solid fa-address-book'></i>
        <i className='fa-solid fa-building-columns'></i>
      </div>
      <form className={formStep !== 2 ? 'actual-step' : undefined}>
        <PersonalInfoFormItem
          className={formStep === 0 ? 'actual-step' : undefined}
        />
        <QueryFormItem className={formStep === 1 ? 'actual-step' : undefined} />
        <button>
          Siguiente <i className='fa-solid fa-arrow-right'></i>
        </button>
      </form>
    </article>
  )
}

const PersonalInfoFormItem = () => {
  return (
    <div>
      <div className='input-container'>
        <input type='text' id='name' placeholder='Nombre' />
        <label htmlFor='name'>
          <i className='fa-regular fa-envelope'></i>
        </label>
      </div>
      <div className='input-container'>
        <input type='email' id='email' placeholder='Email' />
        <label htmlFor='email'>
          <i className='fa-solid fa-user'></i>
        </label>
      </div>
    </div>
  )
}

const QueryFormItem = () => {
  return (
    <div>
      <textarea />
    </div>
  )
}

export default Article5
