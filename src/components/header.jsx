import './header.css'
function Header(){
    return(
        
    <nav className="Header">
         <img id="icon"src="/image/logo/icone.png" alt="NexTek" />
        <div className="Header-links">
        <a href="">Inicio</a>
        <a href="">Serviços</a>
        <a href="">Sobre Nós</a>
        <a href="">Contato</a>
        <a href="">Localização</a>
        </div>
    </nav>
    )
}

export default Header