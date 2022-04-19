/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { rainbowColors } from './themes/Styles';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const CountryPage = () => {
    let {code} = useParams();
    const [countryData, setCountryData] = useState();
    const allCountryData = `https://corona-api.com/countries/${code}`;

    useEffect(() => {
        axios.get(allCountryData)
        .then((response) => {
          // console.log(response.data.data.timeline[0].updated_at[0])
          setCountryData(response.data.data)
        })
      }, [allCountryData]);
      const colors = [`${rainbowColors.red}`, `${rainbowColors.orange}`, `${rainbowColors.yellow}`, `${rainbowColors.green}`, `${rainbowColors.blue}`, `${rainbowColors.purple}`];
      const random_color = colors[Math.floor(Math.random() * colors.length)];
      const random_color2 = colors[Math.floor(Math.random() * colors.length)];

      //Styling
      const countryInfoWrap = css`
        border:1px solid ${random_color};
        margin:1.75em 0.5em 0.5em;
        padding:1em 0.5em;
      `
      const countryLastUpdates = css`
        display:flex;
      `
      const countryLastUpdatesBox = css`
         width: 50vw;
         border:1px solid ${random_color2};
         margin: 0.1em;
         text-align:left;
         padding:1em;
      `
      const contryLastHeadlines = css`
        margin:0;
      `
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return (
        <div css={countryInfoWrap}>
            <article>
                <h1>{countryData?.name}</h1>
                <p>population: {countryData?.population}</p>
            </article>
            <article css={countryLastUpdates}>
                <section css={countryLastUpdatesBox}>
                    <h3 css={contryLastHeadlines}>last update:</h3>
                    <p>{new Date(countryData?.timeline[0].updated_at).toLocaleString('en-GB', options)}</p>
                    <p>{new Date(countryData?.timeline[0].updated_at).toLocaleTimeString('en-US')}</p>
                </section>
                <section css={countryLastUpdatesBox}>
                    <h3 css={contryLastHeadlines}>latest data:</h3>
                    <p>deaths: {countryData?.timeline[0].deaths}</p>
                    <p>confirmed: {countryData?.timeline[0].confirmed}</p>
                    <p>recovered: {countryData?.timeline[0].recovered}</p>
                </section>
            </article>
            <article>
              <h3>latest new today {new Date(countryData?.timeline[0].date).toLocaleString('en-GB', options)}</h3>
              <p>confirmed: {countryData?.timeline[0].new_confirmed}</p>
              <p>recovered: {countryData?.timeline[0].new_recovered}</p>
              <p>deaths: {countryData?.timeline[0].new_deaths}</p>
            </article>
        </div>
     );
}
 
export default CountryPage;