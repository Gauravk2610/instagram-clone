import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function UserSuggestion() {
    return (
        <Container>
            <UserImg>
                <Avatar src='https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg'/>
            </UserImg>
            <Text>
                <h4>Selena Gomez</h4>
                <p>Followed by Kriti</p>
            </Text>
            <Follow>
                Follow
            </Follow>
        </Container>
    )
}

export default UserSuggestion

const Container = styled.div`
    margin: 10px 0px;
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`

const UserImg = styled.div`
    cursor: pointer;

    .MuiAvatar-root {
        width: 34px;
        height: 34px;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 10px;
    h4 {
        font-size: 13px;
        cursor: pointer;
    }
    p {
        font-size: 13px;
        cursor: pointer;
        color: #515151;
    }
`

const Follow = styled.button`
    height: fit-content;
    background-color: inherit;
    border: none;
    color: #0999f6;
    cursor: pointer;
    font-weight: 500;
`