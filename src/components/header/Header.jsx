import './Header.css'

function Header() {
  return (
    <header>
      <div className='navbar'>
        <a href='.'>
          <img
            className='icon'
            src='.\src\assets\logos\flowboard.svg'
            alt='Flowboard Logo'
          />
        </a>
        <div className='links'>
          <a className='info' href='#'>
            Información <i className='fa-solid fa-chevron-down'></i>
          </a>
          <a className='info' href='#'>
            Contacto <i className='fa-solid fa-chevron-down'></i>
          </a>
          <a className='info' href='#'>
            Herramientas
          </a>
        </div>
      </div>
      <div className='userBar'>
        <button className='loginBtn'>Inicia sesión</button>
        <button className='registerBtn'>Regrístrate</button>
      </div>
    </header>
  )
}

export default Header
