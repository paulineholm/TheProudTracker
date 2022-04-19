/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { rainbowColors } from './themes/Styles';
const Colorfulrow = () => {
    const colorfulWrap = css`
        width:100vw;
        margin-right:auto;
        margin-left:auto;
        display:flex;
        flex-row:row wrap;
    `
    const colorBox = css`
        height:0.75em;
        width:16.66%;
    `
    return (
        <div css={colorfulWrap}>
            <div css={colorBox} style={{ backgroundColor:`${rainbowColors.red}` }}></div>
            <div css={colorBox} style={{ backgroundColor:`${rainbowColors.orange}` }}></div>
            <div css={colorBox} style={{ backgroundColor:`${rainbowColors.yellow}` }}></div>
            <div css={colorBox} style={{ backgroundColor:`${rainbowColors.green}`}}></div>
            <div css={colorBox} style={{ backgroundColor:`${rainbowColors.blue}` }}></div>
            <div css={colorBox} style={{ backgroundColor:`${rainbowColors.purple}` }}></div>
        </div>
     );
}
export default Colorfulrow;