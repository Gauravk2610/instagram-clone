import React from 'react'
import styled from 'styled-components'
import UserSuggestion from './UserSuggestion'

function Suggestion() {
    return (
        <Container>
            <Header>
                <Title>
                    Suggestions For You
                </Title>
                <SeeAll>
                    See All
                </SeeAll>
            </Header>
            <UserList>
                <UserSuggestion />
                <UserSuggestion />
                <UserSuggestion />
                <UserSuggestion />
            </UserList>
        </Container>
    )
}

export default Suggestion

const Container = styled.div`
    margin: 10px 6px;

`

const Header = styled.div`
    display: flex;
    padding: 12px 0px;
    padding-bottom: 0px 
    margin-bottom: 4px; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h4`
    font-size: 14px;
    color: grey;   
    font-weight: 500;

`

const SeeAll = styled.button`
    font-size: 14px;
    font-weight: 500;
    border: none;
    background-color: inherit;
`

const UserList = styled.div`
    display: flex;
    flex-direction: column;
`