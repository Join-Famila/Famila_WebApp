import styled from 'styled-components';

export const MainBody = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10%;
    margin-bottom: 30%;
    
    
    .talkArea {
    width: 100%;
    height: 110px;
    box-sizing: border-box;
    padding: 16px;
    position: relative;
    display: flex;
    }

    .talkPng {
    width: 78px;
    height: 78px;
    border-radius: 100px;
    // background-image: url("../../assets/A.png");
    background-size: cover;
    margin-right: 14px;
    position: relative;
    flex-shrink: 0;
}


    .leader {
    width: 24px;
    height: 24px;
    position: relative;
    border-radius: 100px;
    // background-image: url("../../assets/leader.png");
    background-size: cover;
    flex-shrink: 0;
    }

    .talkTitle {
    width: 84%;
    overflow: hidden;
    line-height: 24px;
    height: 24px;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 600;
    position: relative;
    }

    .people {
    color: var(--gray-gray-500, #afb2c0);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    position: relative;
    }

    .message {
    width: 84%;
    overflow: hidden;
    line-height: 22px;
    height: 22px;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    color: var(--gray-gray600, #8a8d9e);
    }

    .mesNumArea {
    }

    .mesNum {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    position: relative;
    display: inline-block;
    padding: 3px 6px;
    border-radius: 500px;
    background: #ff3a3a;
    }

    .one {
    display: flex;
    position: relative;
    padding: 12px 0px;
    box-sizing: border-box;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    }
    .myMoim {
    width: 100%;
    line-height: 26px;
    height: 26px;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    padding: 0 16px;
    box-sizing: border-box;
    }
    .ora {
    color: #f5935c;
    }

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
    justify-content: space-around;

`

export const MeetingItem = styled.div`
    max-width: 33%;
    margin-right: 5%;
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
  height: 60px;
  padding: 0.5em;
  word-break: keep-all;
  text-align: center;
  margin-top: 0.5em;
  font-size: 14px;
  cursor: pointer;
`

export const AccountRegister = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 5%;
    padding: 2%;
    font-size: 15px;
    word-break: keep-all;
    color: gray;
    div{
        margin-left: 2%;
    }
    span{
        color: #f7a070;
        text-decoration: underline;
        &:visited {
            color: #f7a070;
            text-decoration: underline;
        }
    }
`
export const MeetingSchedule = styled.div`
    p{
        font-weight: bold;
        margin: 5%;
        span{
            color: #f7a070;
        }
    }
`
export const CreateMeeting = styled.div`
   position: fixed;
    bottom: 90px; /* 원하는 위치로 조절하세요 */
    right: 20px; /* 원하는 위치로 조절하세요 */
    padding: 10px;
    background-color: #f7a070;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    width: 120px;
    text-align: center;
    font-weight: bold;
    z-index: 12;
`