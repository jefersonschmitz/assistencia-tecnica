import './start.css'

function Start() {
  return (
    <section className="start" id="inicio">
      <div className="start-glow" aria-hidden="true" />
      <div className="start-content">
        <span className="eyebrow"><i /> Tecnologia que volta a funcionar</span>
        <div className="start-brand" aria-label="NexTek Assistência Técnica">
          <img src={`${import.meta.env.BASE_URL}image/logo/icone-transparente-v2.png`} alt="" />
          <span className="start-wordmark">
            <strong>NEX<span>TEK</span></strong>
            <small>Assistência técnica</small>
          </span>
        </div>
        <h1>Seu equipamento em <span>boas mãos.</span></h1>
        <p>Diagnóstico preciso, atendimento transparente e soluções que devolvem performance aos seus dispositivos.</p>
        <div className="start-actions" id="contato">
          <a className="button button-primary" href="https://wa.me/" target="_blank" rel="noreferrer">Falar com um especialista <span aria-hidden="true">→</span></a>
          <a className="button button-secondary" href="#servicos">Conhecer serviços</a>
        </div>
        
      </div>
      <div className="scroll-cue" aria-hidden="true"><span /></div>
    </section>
  )
}

export default Start
