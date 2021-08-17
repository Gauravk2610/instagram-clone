import React from 'react'
import styled from 'styled-components'
import Feed from './Feed'
import Info from './Info'

function Body() {
    return (
        <Container>
            <Content>
                <SubCategory>
                    <Feed />
                    <Info />
                </SubCategory>
            </Content>
        </Container>
    )
}

export default Body

const Container = styled.div`
    display: flex;
    flex: 1;
    overflow-y: overlay;
    background-color: #fafafa;
    justify-content: center;

`

const Content = styled.div`
    padding: 30px;
    max-width: 975px;
    width: 100%;
    display: flex;
    // flex: 1;
    justify-content: center;
`

const SubCategory = styled.div`
    padding: 0 20px;
    width: 100%;
    display: flex;

`