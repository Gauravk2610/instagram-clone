import React from 'react'
import styled from 'styled-components'
import Post from './Post'

function PostList() {
    return (
        <Container>
            <Post />
            <Post />
            <Post />
            <div className='spacing'></div>
        </Container>
    )
}

export default PostList

const Container = styled.div`

    .spacing {
        height: 20px;
    }
`