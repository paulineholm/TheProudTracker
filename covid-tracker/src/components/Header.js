/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bgColors } from './themes/Styles';
const Header = () => {
    const headWrap = css`
		padding: 0;
		margin: auto 0;
        display:flex;
        background:${bgColors.bodyBg};
        justify-content:center;
    `
    const headFlag = css`
        font-size:2em;
        width:10%;
    `
    const headHead = css`
        margin:0;
        padding:0.3em 0;
        width: 70%;
        background: -webkit-linear-gradient(0deg, #ff0000 0%, #edaf19 15%, #edd219 30%, #329b1e 45%, #1463a7 60%, #9e479b 75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `
    return ( 
        <>
            <header css={headWrap}>
                <p css={headFlag}>🏳️‍🌈</p>
                <h1 css={headHead}> The proud Covid-19 tracker </h1>
                <p css={headFlag}>🏳️‍🌈</p>
            </header>
        </>
     );
}
 
export default Header;