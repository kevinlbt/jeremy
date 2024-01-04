
export default function Footer () {

    return <footer className="flex flex-col items-center">
                <div className="flex icone">
            <a href="https://www.instagram.com/zeremy.mov/" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--instagram" aria-label="instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjeremypettre%2F%3Ffbclid%3DIwAR0s1Aw-XhucW_zNGRxHb0Zvar1KBJwauZXP4PN-w_f1MoRMPbf9X7FwAfY&h=AT3amdqacAXr3l-59ka7kMLSsVqxb-fKxd0mP6rAbgqAyb285zOtTcnK5AawJYaP11tntAVUyrUThv50R9LzhwJIlRNPyN5fsIUreQuxQoRNanuy9TN2A0MMJZATGSeraTSkvA" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--linkedin" aria-label="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
            <a href="https://www.twitch.tv/the_zeremy" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--twitch" aria-label="twitch">
                        <i className="fa-brands fa-twitch"></i>
                    </a>
            <a href="https://www.tiktok.com/@z.e.r.e.m.y?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--tiktok" aria-label="tiktok">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
            <a href="https://www.youtube.com/channel/UCLOpOt3fXr5NCJCx49D94Lg" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--youtube" aria-label="youtube">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
            <a href="/contact" className="social-buttons__button social-button social-button--mail" aria-label="mail">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
        <a className="mentions" href="/mentions">Mentions légales</a>
                <p className="hastag">Jeremy Pettre © 2022</p>
            </footer>
}