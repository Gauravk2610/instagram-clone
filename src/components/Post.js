import { Avatar } from '@material-ui/core'
import { BookmarkBorderOutlined, ChatBubbleOutline, Favorite, FavoriteBorder, MoreHoriz, SendOutlined, SentimentSatisfied, SentimentSatisfiedOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Post() {
    return (
        <Container>
            <Header>
                <UserInfo>
                    <Avatar src='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855' />
                    <p>gaurav_konde</p>
                </UserInfo>
                <More>
                    <MoreHoriz />
                </More>
            </Header>
            <Image>
                <img src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/390855" alt="" />
            </Image>
            <EmojiList>
                <Emoji>
                    <Favorite className='like'/>
                    <ChatBubbleOutline />
                    <SendOutlined />
                </Emoji>
                <Save>
                    <BookmarkBorderOutlined />
                </Save>
            </EmojiList> 
            <LikeCounts>
                <p>10K likes</p>
            </LikeCounts>
            <UserDescription>
                <UserName>gaurav_konde</UserName>
                <Description>We are anonymous 💻</Description>
            </UserDescription>
            <CommentCount>
                <p>View all 450 comments</p>
            </CommentCount>
            <TopComments>
                <Comment>
                    <UsersComment>
                        <User>gaurav_konde</User>
                        <Text>Thanks Bro 💪</Text>
                    </UsersComment>
                    <FavoriteBorder />
                </Comment>
                <Comment>
                    <UsersComment>
                        <User>qazi</User>
                        <Text>This is Wholy insanse Dude 🔥🚀</Text>
                    </UsersComment>
                    <FavoriteBorder />
                </Comment>
            </TopComments>
            <TimeStamp>
                <p>2 hours ago</p>
            </TimeStamp>
            <AddComment>
                <SentimentSatisfiedOutlined />
                <input type="text" placeholder='Add a comment...' />
                <PostButton>Post</PostButton>
            </AddComment>
        </Container>
    )
}

export default Post

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    border: 2px solid #f0f0f0;
    background-color: white;
    border-radius: 3px;
    max-height: inherit;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 14px 14px;
    align-items: center;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;

    .MuiAvatar-root {
        width: 34px;
        height: 34px;
        cursor: pointer;
    }

    p {
        margin-left: 18px;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
    }
`

const More = styled.div`

    .MuiSvgIcon-root {
        cursor: pointer;
    }
`

const Image = styled.div`
    max-width: fit-content;
    cursor: pointer;
    height: auto;
    img {
        width: 100%;
    }
`

const EmojiList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 6px;
    align-items: center;

`

const Emoji = styled.div`

    .MuiSvgIcon-root {
        font-size: 30px;
        cursor: pointer;
        color: #303030;
        padding: 4px 10px;

    }

    .like {
        color: #ed4956;
    }
`

const Save = styled.div`

    .MuiSvgIcon-root {
        font-size: 32px;
        cursor: pointer;
    }
`

const LikeCounts = styled.div`
    margin: 0px 16px;

    p {
        font-weight: 500;
        cursor: pointer;
    }
`

const UserDescription = styled.div`
    display: flex;
    padding: 6px 16px;
`
const UserName = styled.h4`
    font-weight: 500;
    margin-right: 6px;
    cursor: pointer;
`

const Description = styled.p`
    color: #515151;  
    cursor: pointer;  
`

const CommentCount = styled.div`
    padding: 4px 16px;

    p {
        color: #b3b3b3;
        font-size: 14px;
        cursor: pointer;
    }
`

const TopComments = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: column;
`

const Comment =  styled.div`
    display: flex;
    flex-align: center;
    margin: 2px 0;
    justify-content: space-between;

    .MuiSvgIcon-root {
        font-size: 14px;
        cursor: pointer;
        color: #515151;  
    }
`

const UsersComment = styled.div`
    display: flex;
    align-items: center;
`

const User = styled.h4`
    font-weight: 500;
    font-size: 16px;
`

const Text = styled.p`
    margin-left: 6px;
`

const TimeStamp = styled.div`
    padding: 4px 16px;
    p {
        text-transform: uppercase;
        font-size: 10px;
        color: #b3b3b3;
    }
`

const AddComment = styled.div`
    border-top: 1px solid #80808040;
    padding: 16px 8px;
    display: flex;

    .MuiSvgIcon-root {
        font-size: 30px;
        padding: 0px 6px;
    }

    input {
        flex: 1;
        width: 100%;
        border: none;
        outline-width: 0;
    }
`

const PostButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: inherit;
    font-weight: 500;
    font-size: 14px;
    color: #c8e8fd;
`