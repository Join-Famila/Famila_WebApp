import styled from 'styled-components';


export const MainBody = styled.div`
    width: 100%;
    height: 100%;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15%;
`

export const InfoText = styled.div`
    p{
        margin: 0 auto;
        font-weight: bold;
    }
`

export const ProfileIconImg = styled.img`
    margin: 5%;
`

export const MyMeeting = styled.div`
    font-weight: bold;
    margin: 5%;
    span{
        color: #f7a070;
    }
`

export const FindMeeting = styled.div`
    display: flex;
    overflow: auto;

`

export const MeetingItem = styled.div`
    width: 35%;
    margin-right: 8%;
    text-align: center;
    
    img{
        border-radius: 50%;
    }
    p{
        word-break: break-word;
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 표시할 줄 수 */
        -webkit-box-orient: vertical;
        text-align: left;
    }

`
export const FindMoreMeeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid lightgray;
  color: lightgray;
  width: 60px;
  height: 55px;
  padding: 0.5em;
  word-break: keep-all;
  text-align: center;
  margin-top: 0.5em;
  font-size: 14px;
`


