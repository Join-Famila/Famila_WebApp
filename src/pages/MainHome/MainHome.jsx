import React, {useState} from 'react'
import * as styles from './MainHomeStyle'
import profileIcon from "../../assets/profileIcon_none.png";

const MainHome = () => {
    // 시니어 or 도우미 역할
    const [userRole, setUserRole] = useState("시니어");
    const [userName, setUserName] = useState("홍길동");
    const [userAge, setUserAge] = useState(20);
    const [myMeeting, setMyMeeting] = useState(2);
    const [meetingList, setMeetingList] = useState([{
        meetingImgSrc: profileIcon, //모임 썸네일 이미지
        meetingTitle: "실버 스윙댄스 모임 두줄에 안녕하세요", //모임 제목
        meetingMoreInfo : "", //모임 상세정보
    }, {
        meetingImgSrc: profileIcon, //모임 썸네일 이미지
        meetingTitle: "중년 러닝 모임", //모임 제목
        meetingMoreInfo : "", //모임 상세정보
    }, {
        meetingImgSrc: profileIcon, //모임 썸네일 이미지
        meetingTitle: "중년 러닝 모임", //모임 제목
        meetingMoreInfo : "", //모임 상세정보
    }]);
    

  return (
      <styles.MainBody>
        <styles.UserInfo>
              <styles.ProfileIconImg src={profileIcon}
                  alt="user-profile"
              />
              <styles.InfoText>
                  <p>{userRole}님,</p><br/>
                  <p>이름: {userName}</p>
                  <p>나이: {userAge}세</p>
                </styles.InfoText>
          </styles.UserInfo>
          <styles.MyMeeting>
              <p>내 모임 <span>{myMeeting}</span></p>
              <styles.FindMeeting>
                  {meetingList.map(meeting => (
                      <styles.MeetingItem key={meeting.id}>
                          <img src={meeting.meetingImgSrc} alt="img"></img>
                          <p>{meeting.meetingTitle}</p>
                          {/* <styles.ProfileIconImg src={profileIcon}
                                alt="user-profile"
                          />
                          <p>testtesttest</p> */}
                      </styles.MeetingItem>
                  ))}
                  <styles.FindMoreMeeting>
                      <p>+{meetingList === 0 ? "모임찾기" : "더보기"}</p>
                  </styles.FindMoreMeeting>
              </styles.FindMeeting>
          </styles.MyMeeting>
    </styles.MainBody>
  )
}

export default MainHome