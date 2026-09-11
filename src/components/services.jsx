import './services.css'

const serviceGroups = [
  {
    type: 'desktop',
    title: 'Computadores & PCs',
    description: 'Do computador de trabalho ao seu setup gamer.',
    services: [
      ['Diagnóstico e reparo', 'Identificação de falhas, travamentos e problemas ao ligar.'],
      ['Limpeza e manutenção preventiva', 'Limpeza interna, troca de pasta térmica e revisão da refrigeração.'],
      ['Formatação e instalação', 'Instalação do sistema operacional, drivers e programas.'],
      ['Upgrade de desempenho', 'Instalação de SSD, expansão de memória RAM e troca de componentes.'],
      ['Montagem de computadores', 'Montagem e organização do setup com componentes compatíveis.'],
      ['Remoção de vírus e backup', 'Remoção de ameaças e cópia de segurança dos seus arquivos.'],
    ],
  },
  {
    type: 'notebook',
    title: 'Notebooks',
    description: 'Cuidado com cada detalhe de quem acompanha sua rotina.',
    services: [
      ['Diagnóstico e reparo', 'Análise de falhas de inicialização, lentidão e desligamentos.'],
      ['Limpeza e controle de temperatura', 'Limpeza do cooler e troca de pasta térmica para reduzir o aquecimento.'],
      ['Formatação e instalação', 'Instalação do sistema operacional, drivers e programas.'],
      ['Upgrade de SSD e memória', 'Mais agilidade com melhorias compatíveis com o seu modelo.'],
      ['Troca de tela e teclado', 'Substituição de telas danificadas e teclados com defeito.'],
      ['Bateria e alimentação', 'Diagnóstico de carregamento e substituição de bateria e carregador.'],
    ],
  },
]

function DeviceIcon({ type }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'desktop' ? (
        <>
          <rect x="3" y="5" width="26" height="18" rx="2" />
          <path d="M3 19h26M16 23v5M10 28h12" />
        </>
      ) : (
        <>
          <rect x="6" y="5" width="20" height="17" rx="2" />
          <path d="m6 22-3 5h26l-3-5M13 24h6" />
        </>
      )}
    </svg>
  )
}

function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-title">
      <div className="services-content">
        <div className="services-heading">
          <span className="eyebrow"><i /> Assistência especializada</span>
          <h2 id="services-title">Soluções completas.<br /><span>Para o seu equipamento.</span></h2>
          <p>Manutenção, reparos e melhorias para você voltar a trabalhar, estudar e jogar com tranquilidade.</p>
        </div>

        <div className="services-grid">
          {serviceGroups.map(({ type, title, description, services }) => (
            <article className="service-card" key={type}>
              <div className="service-card-heading">
                <span className="service-device-icon"><DeviceIcon type={type} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <ul className="service-list">
                {services.map(([name, detail]) => (
                  <li key={name}>
                    <span className="service-check" aria-hidden="true">✓</span>
                    <div><h4>{name}</h4><p>{detail}</p></div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services-contact">
          <div>
            <h3>Não sabe qual é o problema?</h3>
            <p>Conte o que está acontecendo. A gente ajuda com o próximo passo.</p>
          </div>
          <a className="button button-secondary" href="#contato">Solicitar diagnóstico <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Services
