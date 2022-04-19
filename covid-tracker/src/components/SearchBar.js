/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bgColors } from './themes/Styles';
import { useState,useEffect } from 'react';
import { Link }  from "react-router-dom";
import axios from "axios";
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [worldData, setWorldData] = useState();
    const allWorldData = `https://corona-api.com/countries`;

    useEffect(() => {
        axios.get(allWorldData)
        .then((response) => {
          setWorldData(response.data.data)
        })
      }, [allWorldData]);
      const searchInput = css`
        margin:1em;
        padding:0.5em;
        font-size:1em;
        text-align:center;
        width:90vw;
        border:1px solid black;
        border-radius:5px;
        background:${bgColors.searchBarBg};
        color:black;
      `
      const usersWrap = css`
        display:flex;
        justify-content:center;
        flex-direction:column;
        font-family: "Gilbert-Color";
        font-size: 1.5em;
        text-decoration:none;
      `
    return ( 
        <>
        <input type="text" css={searchInput} placeholder="Search a country..." onChange={event => {setSearchTerm(event.target.value)}}/>
        {worldData?.filter((country) => {
          return country.name.toLowerCase().includes(searchTerm.toLowerCase())
         /*    if(searchTerm === "") {
                return country
            } else if (country.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return country
            } */
        }).map((country) =>
        <div css={usersWrap} key={country.code}>
            <Link to={`/countrypage/${country.code}`} style={{textDecoration: "none"}}>
                <p>{country.name}</p>
            </Link>
        </div>
        )}
        </>
     );
}
 
export default SearchBar;