/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { rainbowColors } from './themes/Styles';
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
    const location = useLocation();
    const navWrap = css`
        padding:1.5em 0.5em 0em 0.5em;
    `
    const navLink = css`
        text-decoration:none;
        color:red;
        font-size:1em;
        font-weight:700;
    `
    const colors = [`${rainbowColors.red}`, `${rainbowColors.orange}`, `${rainbowColors.yellow}`, `${rainbowColors.green}`, `${rainbowColors.blue}`, `${rainbowColors.purple}`];
    const random_color = colors[Math.floor(Math.random() * colors.length)];
    return (
        <nav css={navWrap}>
            <Link to="/" css={navLink} style={{color: random_color}}>👉🏾 Home to where the love is</Link>
            {location.pathname !== '/' ? null : <div>
            <p>or check how others have it by simply clicking on the relevant dot on the map to access the latest pandemic updates about the location.</p>
            <h5>Please, take care of yourself and others! 🦠 💉 😷 </h5>
            </div>
            }
        </nav>
     );
}
 
export default Nav;