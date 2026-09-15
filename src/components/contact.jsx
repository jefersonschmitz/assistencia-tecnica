import './contact.css'

const socialLinks = {
  instagram: 'https://www.instagram.com/schmitz_jeferson/',
  linkedin: 'https://www.linkedin.com/in/jefersonschmitz/',
}
const whatsappNumber = '5511123456789'
const whatsappMessage = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para meu equipamento.')

function ContactIcon({ type }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'instagram' ? <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></> : type === 'linkedin' ? <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v7M11.5 17v-7M11.5 13a3 3 0 0 1 6 0v4" /><circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" /></> : <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z" /><path d="m8 7 2 3-1.2 1.2a8 8 0 0 0 4 4L14 14l3 2c-1 3-4 2-7-1s-4-6-2-8Z" /></>}
    </svg>
  )
}

function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="contact-content">
        <div className="contact-heading">
          <span className="eyebrow"><i /> Fale com a NexTek</span>
          <h2 id="contact-title">Seu equipamento precisa.<br /><span>A gente cuida.</span></h2>
          <p>Tem uma dúvida ou precisa de um orçamento? Conte o que está acontecendo e vamos encontrar o próximo passo juntos.</p>
        </div>

        <div className="contact-grid">
          <article className="contact-whatsapp">
            <span className="contact-icon"><ContactIcon type="whatsapp" /></span>
            <h3>Vamos conversar?</h3>
            <p>Envie o modelo do seu PC ou notebook e uma breve descrição do problema pelo WhatsApp.</p>
            <span className="contact-number">(11) 12345-6789 <small>Número de exemplo</small></span>
            <a className="button button-primary contact-button" href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <span aria-hidden="true">↗</span></a>
          </article>

          <div className="contact-socials">
            <div className="contact-social-heading"><h3>Acompanhe de perto</h3><p>Conecte-se com a NexTek nas redes sociais.</p></div>
            {[
              ['instagram', 'Instagram', 'Novidades, dicas e bastidores.'],
              ['linkedin', 'LinkedIn', 'Nossa trajetória e conexões.'],
            ].map(([type, label, description]) => {
              const href = socialLinks[type]
              const content = <><span className="contact-icon"><ContactIcon type={type} /></span><span className="contact-social-copy"><strong>{label}</strong><span>{description}</span>{!href && <small>Em breve</small>}</span><span className="contact-arrow" aria-hidden="true">↗</span></>
              return href ? <a className="contact-social" key={type} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${label} da NexTek`}>{content}</a> : <div className="contact-social contact-social-pending" key={type}>{content}</div>
            })}
          </div>
        </div>
        <div className="contact-signoff"><span>NEX<b>TEK</b></span><p>Tecnologia com proximidade.</p><a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a></div>
      </div>
      <div className="scroll-cue scroll-cue-up" aria-hidden="true"><span /></div>
    </section>
  )
}

export default Contact
