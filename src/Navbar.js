import { Avatar } from '@material-ui/core'
import { AddBoxOutlined, ExploreOutlined, FavoriteBorderOutlined, HomeRounded, SendOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <NavbarContainer> 
            <Container>
                <Main>
                    <Components>
                        <Logo>
                            <div className='logo'>
                                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                            </div>
                        </Logo>
                        <Searchbar>
                            {/* <Search> */}

                                <input type="text" placeholder="Search" />
                            {/* </Search> */}
                        </Searchbar>
                        <Icons>
                            <IconList>
                                <HomeRounded />
                                <SendOutlined  />
                                <AddBoxOutlined  />
                                <ExploreOutlined  />
                                <FavoriteBorderOutlined  />
                            </IconList>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </Icons>
                    </Components>
                </Main>
            </Container>
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    height: 54px;
`

const Container = styled.div`
    position: fixed;
    height: 54px;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
`

const Main = styled.div`
    max-width: 975px;
    width: 100%;
    display: flex;
    flex: 1;
    height: 100%;
`

const Components = styled.div`
    padding: 0px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between  ;
`

const Logo = styled.div`
    display: flex;
    flex: 1;
    margin-top: 7px;
    
    .logo > img {
        width: 100%;
    }

`

const Searchbar = styled.div`
    display: flex;
    flex: 1;
    min-width: 125px;
    max-width: 215px;
    height: 28px;
    width: 100%;
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    input {
        width: 100%;
        text-align: center;
        border: none;
        background-color: #fafafa;
        padding: 4px 15px 4px 15px;
        outline-width: 0;
        color: grey;
    }
`

// const Search = styled.div`
//     min-width: 125px;
//     max-width: 215px;
//     height: 28px;
//     width: 100%;

// `

const Icons = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    .MuiAvatar-root {
        font-size: 30px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

const IconList = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    .MuiSvgIcon-root {
        font-size: 28px;
        padding: 0 6px;
        margin: 1px;
        cursor: pointer;

    }
`