import { Avatar } from '@material-ui/core'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Story() {
    return (
        
        
        <Container>
            <LeftArrow>
                <ArrowLeft />
            </LeftArrow>
            <StoryList>
                <div className='lists'>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    <User>
                        <UserImg>
                            <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855'/>
                        </UserImg>
                        <Text>
                            anonymous
                        </Text>
                    </User>
                    
                    
                </div>
            </StoryList>
            <RightArrow>
                <ArrowRight />
            </RightArrow>
        </Container>
    )
}

export default Story

const Container = styled.div`
    display: flex;
    flex: 1;
    border-radius: 5px;
    background-color: white;
    justify-content: space-between;
    border: 2px solid #f0f0f0;
    padding: 10px 10px;

    
`

const LeftArrow = styled.div`
    
    width: fit-content;
    display: flex;
    align-items: center;
    z-index: 100;

    .MuiSvgIcon-root {
        color: grey;
        z-index: 2;
        background-color: white;
        border-radius: 40px;
        box-shadow: 0px 0px 10px 2px; rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
`

const StoryList = styled.div`
    margin: 0px -35px;
    display: flex;
    flex: 1;
    overflow-x: scroll;


    ::-webkit-scrollbar {
        display: none;
    }

    .lists {
        display: flex;
        margin: 0px 10px;
    }
`

const User = styled.div`
    margin: 0px 6px;
    padding: 2px 4px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 70px;
    width: 100%;
    cursor: pointer;
`

const UserImg = styled.div`
    border: 2.5px solid #e3547c;
    border-radius: 100px;
    .MuiAvatar-root {
        margin: 1.5px;
        width: 60px;
        height: 60px;
    }
`

const Text = styled.p`
    font-size: 12px;
`

const RightArrow = styled.div`
        
    width: fit-content;
    display: flex;
    align-items: center;
    z-index: 100;

    .MuiSvgIcon-root {
        z-index: 2;
        color: grey;
        background-color: white;
        border-radius: 40px;
        box-shadow: 0px 0px 10px 2px; rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
`