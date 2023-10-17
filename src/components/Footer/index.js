import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/' target="_blank">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.x.com/' target="_blank">
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/' target="_blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por<br/> Christopher González</strong>
    </footer>
}

export default Footer