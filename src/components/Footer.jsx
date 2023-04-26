
export default function Footer () {

    return <footer className="flex flex-col items-center">
                <div className="flex icone">
                    <a href="https://www.instagram.com/zeremy.mov/" className="social-buttons__button social-button social-button--instagram" aria-label="instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jeremy-pettre-3a2720188/" className="social-buttons__button social-button social-button--linkedin" aria-label="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.twitch.tv/the_zeremy" className="social-buttons__button social-button social-button--twitch" aria-label="twitch">
                        <i className="fa-brands fa-twitch"></i>
                    </a>
                    <a href="https://www.tiktok.com/@z.e.r.e.m.y?is_from_webapp=1&sender_device=pc" className="social-buttons__button social-button social-button--tiktok" aria-label="tiktok">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCLOpOt3fXr5NCJCx49D94Lg" className="social-buttons__button social-button social-button--youtube" aria-label="youtube">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="/" className="social-buttons__button social-button social-button--mail" aria-label="mail">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
        <a className="mentions" href="/mentions">Mentions légales</a>
                <p className="hastag">Jeremy Pettre © 2022</p>
            </footer>
}