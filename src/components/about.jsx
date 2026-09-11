import { useEffect, useRef } from 'react'
import './about.css'

const values = [
  ['01', 'Conversa sem complicação', 'Explicamos o diagnóstico e as opções de reparo de um jeito que você entende.'],
  ['02', 'Cuidado em cada etapa', 'Seu equipamento faz parte da sua rotina. Por isso, cada detalhe merece atenção.'],
  ['03', 'Evolução constante', 'Buscamos aprender, melhorar nossos processos e crescer a cada atendimento.'],
]

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add('about-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12 })

    section.classList.add('about-animated')
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="sobre" aria-labelledby="about-title" ref={sectionRef}>
      <div className="about-content">
        <div className="about-story">
          <div className="about-copy about-reveal">
            <span className="eyebrow"><i /> Sobre a NexTek</span>
            <h2 id="about-title">Um novo começo.<br /><span>Um compromisso de verdade.</span></h2>
            <p>A NexTek nasceu da vontade de transformar a paixão por tecnologia em algo útil para as pessoas: uma assistência próxima, cuidadosa e fácil de entender.</p>
            <p>Estamos no início da nossa história. Começamos com PCs e notebooks, atenção aos detalhes e disposição para ouvir. Queremos conquistar nosso espaço com trabalho bem-feito e relações que continuem depois do reparo.</p>
            <a className="about-link" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a>
          </div>

          <aside className="about-mission about-reveal" aria-labelledby="about-mission-title">
            <div className="about-status"><span /> Nossa história está começando</div>
            <div className="about-emblem" aria-hidden="true">
              <div className="about-orbit" />
              <img src={`${import.meta.env.BASE_URL}image/logo/icone-transparente-v2.png`} alt="" width="120" height="120" loading="lazy" />
            </div>
            <span className="about-label">O que nos move</span>
            <h3 id="about-mission-title">Crescer com a confiança<br />de quem conta com a gente.</h3>
            <p>Cada equipamento que chega é uma oportunidade de fazer a diferença na rotina de alguém.</p>
            <div className="about-signature">NEX<span>TEK</span><small>Tecnologia com proximidade.</small></div>
          </aside>
        </div>

        <div className="about-values">
          {values.map(([number, title, description]) => (
            <article className="about-value about-reveal" key={number}>
              <span className="about-value-number" aria-hidden="true">{number}<span> /</span></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
