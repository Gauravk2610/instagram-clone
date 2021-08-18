import React from 'react'
import styled from 'styled-components'
import PostList from './components/PostList'
import Story from './components/Story'

function Feed() {
    return (
        <Container>
            <Story />
            <PostList />
        </Container>
    )
}

export default Feed

const Container = styled.div`
    width: 100%;
    flex: 0.7;
    max-width: 614px;
    min-width: 300px;

    @media(max-width: 1000px) {
        flex: 1;
    } 
`