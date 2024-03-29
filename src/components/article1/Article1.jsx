import './Article1.css'

function Article1() {
  return (
    <article className='articile_no1'>
      <section className='left'>
        <div className='headlines'>
          <h2 className='headline'>Organiza tu flujo, sin límites</h2>
          <p className='2headline'>
            Transforma tu caos en orden con nuestra app líder. Simplifica tu
            vida y alcanza tus metas sin esfuerzo.
          </p>
        </div>

        <div className='register'>
          <div className='input-container'>
            <input type='email' id='email' placeholder='Introduce tu email' />
            <label htmlFor='email'>
              <i className='fa-regular fa-envelope'></i>
            </label>
          </div>
          <button>Apúntate</button>
        </div>

        <div className='logos'>
          <a className='belen' href='https://iesbelen.org/' target='blank'>
            <img
              className='belenLogo logo'
              src='./src/assets/logos/belenLOGO.svg'
              alt='I.E.S. Belén Logo'
            />
            Belén
          </a>
          <a className='playamar' href='https://iesplayamar.es/' target='blank'>
            <img
              className='playamarLOGO logo'
              src='./src/assets/logos/playamarLOGO.svg'
              alt='I.E.S. Playamar Logo'
            />
            Playamar
          </a>
          <a
            className='github'
            href='https://github.com/tluzvid22'
            target='blank'
          >
            <i alt='GitHub Logo' className='fa-brands fa-github logo'></i>
            GitHub
          </a>
          <a
            className='linkedin'
            href='https://www.linkedin.com/in/tobiasluzuriaga/'
            target='blank'
          >
            <i alt='LinkedIn Logo' className='fa-brands fa-linkedin logo'></i>
            LinkedIn
          </a>
        </div>
      </section>

      <section className='right'>
        <img
          className='tablero'
          src='./src/assets/img/tableroKanban.jpg'
          alt='Tablero Kanban Productive'
        />
      </section>
    </article>
  )
}

export default Article1
