import React from 'react'
import styled from 'styled-components'

function Info() {
    return (
        <Container>
            <div>

            Info
            </div>
        </Container>
    )
}

export default Info

const Container = styled.div`
    display: flex;
    flex: 0.3;
    div {
        position: fixed;
    }
`