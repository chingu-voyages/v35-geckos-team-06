import React from 'react'
import {AccountCircle, Search } from '@material-ui/icons'

import { 
    Container, 
    Wrapper, 
    SearchContainer, 
    Input, ProfileImage } from '../../styled/Navbar'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <SearchContainer>
                <Input/>
                <Search style={{color: "white", fontSize: 30}}/>
            </SearchContainer>
            <ProfileImage>
                <AccountCircle style={{color: "white", fontSize: 35, padding: 1}}/>
            </ProfileImage>
                
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
