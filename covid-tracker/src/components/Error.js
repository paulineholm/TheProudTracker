/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import mike from "../assets/errormike.png";
const Error = () => {
    const errorWrap = css`
    margin-top:5em;
    `
    const errorImg = css`
    width: 80%;
    margin-top:0.5em;
    `
    return (
        <div css={errorWrap}>
        <h2>404! You went a wrong way!</h2>
        <img src={mike} css={errorImg} alt="Mike the world saver!" />
        </div>
     );
}
 
export default Error;