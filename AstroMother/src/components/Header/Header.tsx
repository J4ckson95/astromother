
import InstLogo from "../../assets/instagram.png"
import FaceLogo from "../../assets/facebook.png"
import Logo from "../../assets/logo.svg"
import menu from "../../assets/barra-de-menus.png"
import ImgAstro from "../../assets/8306150.jpg"
import style from "./header.module.css"
const Header = () => {
    return (
        <div className={style.container_head}>
            <div className={style.top_head}>
                <ol>
                    <li>
                        <img src={InstLogo} />
                    </li>
                    <li>
                        <img src={FaceLogo} />
                    </li>
                </ol>
                <div className={style.buttons}>
                    <button>ASEOSRÍA EXPRESS</button>
                    <button>WHATSAPP</button>
                </div>
            </div>
            <div className={style.head}>
                <img className={style.logo} src={Logo} />
                <img className={style.PNGmenu} src={menu} />
                <nav>
                    <ol>
                        <li>Inicio</li>
                        <li>Astrologia</li>
                        <li>Astrologos</li>
                        <li>Herramientas</li>
                        <li>Recursos</li>
                    </ol>
                </nav>
            </div>
            <div className={style.container_Promo}>
                <img src={ImgAstro}></img>
                <h1>Cuando miras al cielo, comienzas a entenderte a ti mismo</h1>
            </div>
        </div>
    )
}
export default Header