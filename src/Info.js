import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Suggestion from './components/Suggestion'

function Info() {
    return (
        <Container>
            <Main>
                <UserInfo>
                    <UserImg>
                        <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                    </UserImg>
                    <Text>
                        <h4>gaurav_konde</h4>
                        <p>G@urav2610</p>
                    </Text>
                    <Switch>
                        Switch
                    </Switch>
                </UserInfo>
                <Suggestion />
            </Main>
        </Container>
    )
}

export default Info

const Container = styled.div`
    display: flex;
    flex: 0.3;
    margin: 10px 10px;
    margin-left: 26px;
    max-width: 293px;
    @media(max-width: 1000px) {
        display: none;
    } 
`

const Main = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    max-width: inherit;
    display: flex;
`

const UserInfo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin: 0px 6px;
    padding: 2px 0px; 
`

const UserImg = styled.div`
    border: 2.5px solid #e3547c;
    border-radius: 100px;
    cursor: pointer;

    .MuiAvatar-root {
        margin: 1.5px;
        width: 60px;
        height: 60px;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: auto;
    margin-left: 10px;

    h4 {
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
    }
    
    p {
        color: #515151;
        font-weight: 200;
        cursor: pointer;
        font-size: 14px;
    }
`

const Switch = styled.button`
    height: fit-content;
    color: #0999f6;
    width: fit-content;
    cursor: pointer;
    background-color: inherit;
    border: none;

`