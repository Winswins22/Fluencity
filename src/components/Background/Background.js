import React from 'react'
import { BackgroundAndNav } from './Background.elements'
import { Nav } from './Background.elements'
import { Logo } from './Background.elements'
import { NavLinks } from './Background.elements'
import { ModeHeader } from './Background.elements'
import { BgPic1 } from './Background.elements'
import { BgPic2 } from './Background.elements'
import { BgPic3 } from './Background.elements'
import { BgPic4 } from './Background.elements'
import { BgPic5 } from './Background.elements'
import { BgPic6 } from './Background.elements'

export const Background = () => {
    return (
        <BackgroundAndNav>
            <Nav>
                <Logo></Logo>
                <NavLinks>Home</NavLinks>
                <NavLinks>Results</NavLinks>
                <ModeHeader>Modes</ModeHeader>
                <NavLinks>Speaking</NavLinks>
                <NavLinks>Singing</NavLinks>
                <NavLinks>Rapping</NavLinks>
            </Nav>

            <BgPic1></BgPic1>
            <BgPic2></BgPic2>
            <BgPic3></BgPic3>
            <BgPic4></BgPic4>
            <BgPic5></BgPic5>
            <BgPic6></BgPic6>
        </BackgroundAndNav>
    )
}
export default Background