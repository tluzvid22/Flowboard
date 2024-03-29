import { useRef, useState } from 'react'
import './Article4.css'
import { get4RandomQuestions } from '../../constants/faqs'

function Article4() {
  const [index, setIndex] = useState(0)
  const randomQuestions = useRef(get4RandomQuestions())

  return (
    <article className='article_no4'>
      <section className='content'>
        <div className='left'>
          <header className='headlines'>
            <h2 className='headline'>¿Preguntas?</h2>
            <h2 className='headline2'>Respuestas.</h2>
            <p className=' headline3'>
              Las respuestas a tus preguntas mas frecuentes
            </p>
          </header>
          <div className='features'>
            <div className='item'>
              <i className='fa-solid fa-check'></i>
              <div className='title'>
                <h3>Te ayudamos</h3>
                <p>
                  Accede a las respuestas de las dudas mas frecuentes de
                  nuestros usuarios.
                </p>
              </div>
            </div>
            <div className='item'>
              <i className='fa-solid fa-check'></i>
              <div className='title'>
                <h3>Ayuda en tiempo real</h3>
                <p>
                  Si las preguntas frecuentes no han resuelto tus dudas,
                  contáctanos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <ul className='questions'>
            {randomQuestions.current.map((question) => {
              const actualIndex = index
              const faqIndex = randomQuestions.current.findIndex(
                (indexSearched) => indexSearched === question
              )
              const showAnswer = actualIndex === faqIndex

              const chevronClass = `fa-solid fa-chevron-right ${
                showAnswer ? '-right' : '-down'
              }`
              return (
                <li className='question' key={faqIndex}>
                  <div
                    className='title'
                    onClick={() => {
                      const alreadySelected = faqIndex === index
                      setIndex(alreadySelected ? -1 : faqIndex)
                    }}
                  >
                    <h3>{question.question}</h3>
                    <i className={chevronClass}></i>
                  </div>
                  {showAnswer && <p className='answer'>{question.answer}</p>}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </article>
  )
}

export default Article4
