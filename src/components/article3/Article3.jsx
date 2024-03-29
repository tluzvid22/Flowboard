import './Article3.css'
import { useState } from 'react'
import { CASES } from '../../constants/cases'

function Article3() {
  const [index, setIndex] = useState(0)

  const handleClick = (event) => {
    let newIndex = event.target.getAttribute('data-key')
    const lastIndex = index

    if (newIndex === 'back') {
      newIndex = lastIndex - 1
      if (newIndex < 0) {
        newIndex = 4
      }
    } else if (newIndex === 'next') {
      newIndex = lastIndex + 1
      if (newIndex > CASES.length - 1) {
        newIndex = 0
      }
    }

    setIndex(parseInt(newIndex))
  }

  return (
    <article className='article_no3'>
      <div className='headlines'>
        <h2 className='headline'>Casos de éxito</h2>
        <p className='2headline'>
          Descubre cómo nuestra plataforma se adapta a diferentes situaciones
          profesionales y personales para mejorar tu productividad en cualquier
          contexto.
        </p>
      </div>

      <section className='case'>
        <img
          className='image_case'
          src={CASES[index].src}
          alt={`IMG Case ${CASES[index].title}`}
        />
        <div className='description_case'>
          <h3>{CASES[index].title}</h3>
          <p>{CASES[index].paragraph}</p>
          <a>
            Descubre cómo<i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>
      </section>

      <nav>
        <i
          data-key='back'
          className='fa-solid fa-chevron-left'
          onClick={handleClick}
        ></i>
        <ul className='indice'>
          {CASES.map((caseData) => {
            const actualIndex = index
            const caseIndex = CASES.findIndex(
              (indexSearched) => indexSearched === caseData
            )
            const classN =
              actualIndex === caseIndex ? 'selected' : 'not_selected'
            return (
              <li
                className={classN}
                data-key={caseIndex}
                key={caseIndex}
                onClick={handleClick}
              />
            )
          })}
        </ul>
        <i
          data-key='next'
          className='fa-solid fa-chevron-right'
          onClick={handleClick}
        ></i>
      </nav>
    </article>
  )
}

export default Article3
