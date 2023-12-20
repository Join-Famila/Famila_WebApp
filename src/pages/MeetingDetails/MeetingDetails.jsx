import React,{useState} from 'react'
import * as styles from './MeetingDetailsStyle';
import { StyledSlider } from '../../components/ScheduleSlider/ScheduleSliderStyle';
import arrowLeftImg from '../../assets/arrow-left.png';
import crownImg from '../../assets/crown.png';
import kakaoIcon from '../../assets/kakao_icon.png';
import areaIcon from '../../assets/areaIcon.png';
import imgA from '../../assets/A.png';
import FooterMenu from '../../components/FooterMenu/FooterMenu';

const MeetingDetails = () => {
    const goBack = () => {
    window.history.back();
  };

  const [isMeetingOrder, setIsMeetingOrder] = useState(true);

  return (
      <>
        <styles.MeetingDetailsBody>
          <div className="head">
            <img
              className="leftArrow"
              src={arrowLeftImg}
              onClick={goBack}
              alt="leftArrowimg"
            />
            실버들의 러닝 모임
          </div>
          <div className="titleBox">
            <div className="selTitle">홈</div>
            <div className="title">게시판</div>
            <div className="title">사진첩</div>
            <div className="title">단체톡</div>
            <div className="title">용품구매</div>
          </div>
          <div className="moimImgList" style={{backgroundImage: `url(${imgA})`}}>
            <div className="signup">내가 참여한 모임</div>
          <div className="dot" style={{
            position: "absolute",
            bottom: "10px"
          }}>
              <div className="grayDot"></div>
              <div className="blackGrayDot"></div>
            </div>
          </div>
          <div className="moimTagArea">
            <div className="whiteTag">🏌🏼 활동/건강</div>
            <div className="tag">헬스</div>
            <div className="tag">등산</div>
            <div className="tag">자전거</div>
          </div>
          <div className="myMoim" style={{marginTop: "20px"}}>
            모임 일정 <span className="ora">2</span>
          </div>
          <div className="moim1jung">
            <div className="moimTitleArea">
              <div className="moimMinImg" style={{backgroundImage: `url(${imgA})`}}></div>
              <div className="moimTitleText">실버 스윙댄스 모임</div>
            </div>
            <div className="moimNeyoungArea">
              <div className="moimWhen">
                <span className="grayMin">날짜 </span> <span>7월 18일(토) </span>
                <span>오전 10:00 </span>
                <span className="red">D-10</span>
              </div>
              <div className="moimWhen">
                <span className="grayMin">위치 </span> <span>효령로55길 23 </span>
                <span className="grayMid" style={{textDecorationLine: "underline"}}
                  >(지도보기)</span
                >
              </div>
              <div className="moimWhen">
                <span className="grayMin">인원 </span>
                <span><a className="red">3</a>/20명</span>
                <span className="grayMid">(<a>17</a>자리 남음)</span>
              </div>
              <div
                className="moimWhen"
                style={{
                  height: "32px",
                  borderTop: "1px solid #e7e8ee",
                  color: "#f5935c",
                  padding: "8px 0 0 0",
                  gap: "0",
                  justifyContent: "center"
                }}
              >
                회비 : &#8361;<a>20,000</a>원
              </div>
            </div>
          </div>
          <div className="illjungCham">일정 참여</div>
          <div className="dot">
            <div className="blackGrayDot"></div>
            <div className="grayDot"></div>
          </div>
          <div className="myMoim" style={{marginTop: "16px"}}>
            모임원 <span className="ora">12</span>
            <div className="viewAll">전체 보기</div>
          </div>
          <div className="moimPeopleArea">
            <div className="moimJangArea">
              <div className="moimJangImg" style={{backgroundImage: `url(${imgA})`}}></div>
              <div className="moimJangText">
                <div className="moimJangBadge">
                  <img className="crown" src={crownImg} alt="crownImg"/>
                  모임장
                </div>
                <div className="moimJangName">김수지</div>
              </div>
            </div>
            <div className="moimPeople">
              <div className="moimPeopleImg" style={{backgroundImage: `url(${imgA})`}}></div>
              <div className="moimPeopleImg"style={{backgroundImage: `url(${imgA})`}}></div>
              <div className="moimPeopleImg"style={{backgroundImage: `url(${imgA})`}}></div>
              <div className="moimPeopleImg"style={{backgroundImage: `url(${imgA})`}}></div>
              <div className="moimPeopleImg"style={{backgroundImage: `url(${imgA})`}}>+9</div>
            </div>
          </div>
          <div className="kakaoArea">
            <div className="kakao0you">
              <img className="kakao" src={kakaoIcon} alt="kakaoIcon"/>
              카카오톡에 모임 공유하기
            </div>
          </div>
          <div className="myMoim" style={{marginTop: "16px"}}>모임 소개</div>
          <div className="introMoim">
            -가볍게 즐길 수 있는 사교 러닝 모임-<br />
            • 몸치 박치 여도 괜찮은 커플 댄스모임<br />
            • 친구 사귀기 좋고 즐거움이 있는 모임<br />
            • 모임 회비 : 10,000원<br />• 수업 회비 : 30,000원
          </div>
          <div className="myMoim" style={{marginTop: "32px"}}>
            게시판
            <div className="viewAll">전체 보기</div>
          </div>
          <div className="gaesiArea">
            <div className="geul"><span className="ora">[필독]</span>*공지*</div>
            <div className="geul"><span className="ora">[필독]</span>가입인사 양식</div>
          </div>
          <div className="myMoim" style={{marginTop: "32px"}}>
            사진첩
            <div className="viewAll">전체 보기</div>
          </div>
          <div className="moimSaJinArea">
            <div className="moimSaJin" style={{backgroundImage: `url(${imgA})`}}></div>
            <div className="moimSaJin" style={{backgroundImage: `url(${imgA})`}}></div>
            <div className="moimSaJin" style={{backgroundImage: `url(${imgA})`}}>+9</div>
          </div>
          <div className="myMoim" style={{marginTop: "32px"}}>활동지역</div>
          <div className="moimListAdd">
            <img className="listAddicon" src={areaIcon} alt="areaIcon"/>중랑구 면목동
          </div>
          <div className="moimAddressViewArea">
            <div className="moimAddView"></div>
        </div>
        {isMeetingOrder ?
          <></> :
          <div className="moimSigninArea">
            <div className="moimSignin">모임 참여</div>
          </div>
          }
        {isMeetingOrder ?
          <>
            <div className="make1jung">
                <div className="make1Text">일정 생성</div>
              </div>
              <div className="invite">
                <div className="inviteText">+ 친구 초대</div>
              </div>
          </> :
            <></>
        }
        
          <div className="none"><div className="nonenone"></div></div>
      </styles.MeetingDetailsBody>
      <FooterMenu/>
      </>
  )
}

export default MeetingDetails