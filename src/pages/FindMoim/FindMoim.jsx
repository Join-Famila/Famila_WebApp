import React, { useState } from "react";
import * as styles from "./FindMoimiStyle";
import { useNavigate, Link } from "react-router-dom";
import arrowLeftImg from "../../assets/arrow-left.png";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const FindMoim = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // window.history.back();
    navigate("/");
  };

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };
  const goMakeMoim = () => {
    navigate("/MakeMoim");
  };

  const [selectLocation, setSelectLocation] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  return (
    <styles.FindMoim>
      <div className="head">모임 활동</div>
      <div className="titleBox">
        <div className="selTitle">모임 찾기</div>
        <div className="title" onClick={() => alert("준비중입니다.")}>
          내 모임
        </div>
        <div className="title" onClick={() => alert("준비중입니다.")}>
          모임 종류
        </div>
      </div>
      <div className="myMoim" style={{ marginTop: "20px" }}>
        모임 일정 <span className="ora">2</span>
      </div>
      <div className="moim1jung">
        <div className="moimTitleArea">
          <div className="moimMinImg"></div>
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
            <span
              className="grayMid"
              style={{ textDecorationLine: "underline" }}
            >
              (지도보기)
            </span>
          </div>
          <div className="moimWhen">
            <span className="grayMin">인원 </span>
            <span>
              <a className="red">3</a>/20명
            </span>
            <span className="grayMid">
              (<a>17</a>자리 남음)
            </span>
          </div>
          <div
            className="moimWhen"
            style={{
              height: "32px",
              borderTop: "1px solid #e7e8ee",
              color: "#f5935c",
              padding: "8px 0 0 0",
              gap: "0",
              justifyContent: "center",
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
      <div className="searchArea">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="검색으로 원하는 모임 찾기"
        />
        <img className="searchIcon" src="../images/searchIcon.png" />
      </div>
      <div className="address">
        서울특별시 중랑구 면목동
        <img className="downArrow" src="../images/downArrowIcon.png" />
      </div>
      <div className="chiArea">
        <div className="oranBorder">전체</div>
        <div className="whiteborder">🏌🏼 활동/건강</div>
        <div className="whiteborder">🎤 문화/예술</div>
        <div className="whiteborder">🍖 음식</div>
        <div className="whiteborder">✈️ 여행</div>
        <div className="whiteborder">🔜 기타 등등</div>
      </div>
      <div className="moimListArea">
        <div className="moimListImgTittle">
          <div className="moimListImg"></div>
          <div className="titleAddArea">
            <div className="moimListTitle">수도권 둘레길 걷기 60대 들의</div>
            <div className="moimListAdd">
              <img className="listAddicon" src="../images/areaIcon.png" />
              중랑구 면목동 7명
            </div>
          </div>
        </div>
        <div className="chiTagArea">
          <div className="whiteTag">🏌🏼 활동/건강</div>
          <div className="tag">헬스</div>
          <div className="tag">등산</div>
          <div className="tag">자전거</div>
        </div>
      </div>
      <div className="makeMoim" onClick={goMakeMoim}>
        {/* <img className="plus" src="../images/plusIcon.png" /> */}
        <dic className="makeMoText">모임 만들기</dic>
      </div>

      <BottomSheet
        isOpen={isOpen}
        toggleBottomSheet={toggleBottomSheet}
        selectBottomSheetPage={"showLocationSearch"}
        setSelectLocation={setSelectLocation}
      />
      <FooterMenu />
    </styles.FindMoim>
  );
};

export default FindMoim;
