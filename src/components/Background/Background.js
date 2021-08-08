import React, {useState} from 'react'
import { BackgroundAndNav } from './Background.elements'
import { Nav } from './Background.elements'
import { Logo } from './Background.elements'
import { NavLinks } from './Background.elements'
import { 
    ModeHeader,
    InDevelopmentModes,
    InDevelopmentText
} from './Background.elements'
import { BgPic1 } from './Background.elements'
import { BgPic2 } from './Background.elements'
import { BgPic3 } from './Background.elements'
import { BgPic4 } from './Background.elements'
import { BgPic5 } from './Background.elements'
import { BgPic6 } from './Background.elements'

import { Home } from '../Home/Home'
import Testing from '../Testing/Testing'
import { Results } from '../Results/Results'


export const Background = () => {
    const [currentPage, setCurrentPage] = useState('Home');
    console.log(currentPage);

    const HandleNavigation = (PageClicked) => {
        setCurrentPage(PageClicked);
    }

    return (
        <BackgroundAndNav>
            <Nav>
                <Logo onClick={() => {HandleNavigation('Home')}}></Logo>
                <NavLinks onClick={() => {HandleNavigation('Home')}}>Home</NavLinks>
                <NavLinks onClick={() => {HandleNavigation('Results')}}>Results</NavLinks>
                <ModeHeader>Modes</ModeHeader>
                <NavLinks onClick={() => {HandleNavigation('Testing')}}>Speaking</NavLinks>
                <InDevelopmentModes>
                    Singing
                    <InDevelopmentText>   (In Development)</InDevelopmentText>
                </InDevelopmentModes>
                <InDevelopmentModes>
                    Rapping
                    <InDevelopmentText>(In Development)</InDevelopmentText>
                </InDevelopmentModes>
            </Nav>

            <BgPic1></BgPic1>
            <BgPic2></BgPic2>
            <BgPic3></BgPic3>
            <BgPic4></BgPic4>
            <BgPic5></BgPic5>
            <BgPic6></BgPic6>

            {currentPage === 'Home' ? <Home></Home> : null};
            {currentPage === 'Results' ? <Results></Results> : null};
            {currentPage === 'Testing' ? <Testing></Testing> : null};



        </BackgroundAndNav>
    )
}
export default Background