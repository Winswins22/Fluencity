import styled from "styled-components";
import { Link } from 'react-router-dom';

import NavImg from "../../images/NavBg.PNG"
import LogoImg from "../../images/Logo.png"
import BgImg1 from "../../images/BgImg1.png"
import BgImg2 from "../../images/BgImg2.png"
import BgImg3 from "../../images/BgImg3.png"
import BgImg4 from "../../images/BgImg4.png"
import BgImg5 from "../../images/BgImg5.png"
import BgImg6 from "../../images/BgImg6.png"



export const BackgroundAndNav = styled.div`
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: #e6f4e1ff;
    overflow: hidden;
`
export const Nav = styled.div`
    padding-top: 20px;
    margin: 0;
    height: 100vh;
    width: 35vh;
    background-color: #305f30;
    background-image: url(${NavImg});
    background-repeat: no-repeat;
    background-size: 100%;
`

export const Logo = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    padding-bottom: 25px;
    height: 5vh;
    width: 200px;
    /* border:2px solid red; */
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
`

export const NavLinks = styled.button`
    color: white;
    font-size: 30px;
    background: 0;
    border: 0;
    width: 50%;
    display: block;
    text-align: left;
    padding: 10px 0 10px 20px;
    text-decoration: none;
    cursor: pointer;
`

export const InDevelopmentModes = styled.p`
    color: #b3b3b3;
    font-size: 30px;
    display: block;
    width: 100%;
    text-align: left;
    padding: 10px 0 10px 20px;
    text-decoration: none;
`
export const InDevelopmentText = styled.p`
    color: #b3b3b3;
    font-size: 15px;
    display: inline;
    width: 30%;
    text-align: left;
    padding: 10px 0 10px 20px;
    text-decoration: none;
    position: absolute;
    left: 130px;


`

export const ModeHeader = styled.h2`
    color: white;
    font-size: 35px;
    background: 0;
    border: 0;
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 15px 0 0 0;
`

export const BgPic1 = styled.div`
    width: 250px;
    height: 250px;
    background-size: 100%;
    background-image: url(${BgImg1});
    background-repeat: no-repeat;
    position: absolute;
    left: 30vh;
    top: 6vh;
    z-index: 2;
    transform: rotate(-10deg);
`
export const BgPic2 = styled.div`
    width: 350px;
    height: 250px;
    background-size: 100%;
    background-image: url(${BgImg2});
    background-repeat: no-repeat;
    position: absolute;
    left: 100vh;
    top: 5vh;
    z-index: 1;
    transform: rotate(7deg);
`
export const BgPic3 = styled.div`
    width: 150px;
    height: 200px;
    background-size: 100%;
    background-image: url(${BgImg3});
    background-repeat: no-repeat;
    position: absolute;
    left: 50vh;
    bottom: 2vh;
    z-index: 2;
    transform: rotate(-13deg);
`
export const BgPic4 = styled.div`
    width: 350px;
    height: 350px;
    background-size: 100%;
    background-image: url(${BgImg4});
    background-repeat: no-repeat;
    position: absolute;
    left: 20vh;
    bottom: 15vh;
    z-index: 1;
    transform: rotate(10deg);
`
export const BgPic5 = styled.div`
    width: 300px;
    height: 250px;
    background-size: 100%;
    background-image: url(${BgImg5});
    background-repeat: no-repeat;
    position: absolute;
    left: 120vh;
    bottom: 2vh;
    z-index: 2;
    transform: rotate(-5deg);
`
export const BgPic6 = styled.div`
    width: 400px;
    height: 300px;
    background-size: 100%;
    background-image: url(${BgImg6});
    background-repeat: no-repeat;
    position: absolute;
    right: 3vh;
    bottom: 30vh;
    z-index: 1;
    transform: rotate(10deg);
`