/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bgColors } from './themes/Styles';
import Colorfulrow from './Colorfulrow';
const Footer = () => {
    const footerWrap = css`
		text-align: center;
		padding: 0;
		margin: auto 0;
        bottom: 0;
		left: 0;
		right: 0;
        position:fixed;
        background:${bgColors.headFootBg};
    `
    const footerText = css`
        font-size:0.75em;
        padding-top:0.25em;
    `
    return ( 
        <>
            <footer css={footerWrap}>
                <Colorfulrow />
                <p css={footerText}>Made with love in Denmark | Copenhagen, 2022</p>
            </footer>
        </>
     );
}
 
export default Footer;