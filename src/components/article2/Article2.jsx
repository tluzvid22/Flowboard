import './Article2.css'

function Article2() {
  return (
    <article className='article_no2'>
      <div className='headlines'>
        <h2 className='headline'>Características</h2>
        <p className='2headline'>
          Descubre las características principales de nuestra app
        </p>
      </div>

      <section>
        <div className='fluidez'>
          <img
            className='fluidez_logo'
            src='./src/assets/logos/fluidez.svg'
            alt='Fluidez IMG'
          />
          <h3>Fluidez</h3>
          <p>
            Organiza tus tareas sin complicaciones. Con nuestra app, gestionar
            proyectos nunca fue tan fácil.
          </p>
          <a>
            Más información <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>

        <div className='colaboracion'>
          <img
            className='colaboracion_logo'
            src='./src/assets/logos/colaboracion.svg'
            alt='Colaboracion IMG'
          />
          <h3>Colaboración</h3>
          <p>
            Trabaja en equipo sin fronteras. Comparte tableros sin importar la
            distancia.
          </p>
          <a>
            Más información <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>

        <div className='personalizable'>
          <img
            className='personalizable_logo'
            src='./src/assets/logos/personalizable.svg'
            alt='Personalizable IMG'
          />
          <h3>Personalizable</h3>
          <p>
            Personaliza cada detalle. Desde etiquetas hasta notificaciones,
            adapta la app a tu estilo de trabajo.
          </p>
          <a>
            Más información <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>
      </section>
    </article>
  )
}

export default Article2
