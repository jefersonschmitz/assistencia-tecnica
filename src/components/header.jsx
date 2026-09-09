import './header.css'

function Header() {
  return (
    <header className="site-header">
      <nav className="header-content" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="NexTek - início">
          <span className="brand-mark"><img src="/image/logo/icone-transparente-v2.png" alt="" /></span>
          <span>NEX<b>TEK</b></span>
        </a>
        <div className="header-links">
          <a href="#inicio">Início</a><a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre nós</a><a href="#contato">Contato</a>
        </div>
        <a className="header-cta" href="#contato">Solicitar orçamento</a>
      </nav>
    </header>
  )
}

export default Header
