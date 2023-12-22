import React, { useState } from "react";
import * as styles from "./FindMoimiStyle";
import { useNavigate, Link } from "react-router-dom";
import arrowLeftImg from "../../assets/arrow-left.png"
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

    const [selectLocation, setSelectLocation] = useState("");

    const [isOpen, setIsOpen] = useState(false);
return (
    <styles.FindMoim>
      <div className="head">
        모임 활동
      </div>
      <div class="titleBox">
          <div class="selTitle">모임 찾기</div>
          <div class="title" onclick="location.href='./myMoim.html'">내 모임</div>
          <div class="title" onclick="location.href='./moimType.html'">모임 종류</div>
        </div>
        <div class="myMoim" style="margin-top: 20px">
          모임 일정 <span class="ora">2</span>
        </div>
        <div class="moim1jung">
          <div class="moimTitleArea">
            <div class="moimMinImg"></div>
            <div class="moimTitleText">실버 스윙댄스 모임</div>
          </div>
          <div class="moimNeyoungArea">
            <div class="moimWhen">
              <span class="grayMin">날짜 </span> <span>7월 18일(토) </span>
              <span>오전 10:00 </span>
              <span class="red">D-10</span>
            </div>
            <div class="moimWhen">
              <span class="grayMin">위치 </span> <span>효령로55길 23 </span>
              <span class="grayMid" style="text-decoration-line: underline"
                >(지도보기)</span>
            </div>
            <div class="moimWhen">
              <span class="grayMin">인원 </span>
              <span><a class="red">3</a>/20명</span>
              <span class="grayMid">(<a>17</a>자리 남음)</span>
            </div>
            <div
              class="moimWhen"
              style="
                height: 32px;
                border-top: 1px solid #e7e8ee;
                color: #f5935c;
                padding: 8px 0 0 0;
                gap: 0;
                justify-content: center;
              "
            >
              회비 : &#8361;<a>20,000</a>원
            </div>
          </div>
        </div>
        <div class="illjungCham">일정 참여</div>
        <div class="dot">
          <div class="blackGrayDot"></div>
          <div class="grayDot"></div>
        </div>
        <div class="searchArea">
          <input
            type="text"
            name="search"
            class="search"
            placeholder="검색으로 원하는 모임 찾기"
          />
          <img class="searchIcon" src="../images/searchIcon.png" />
        </div>
        <div class="address">
          서울특별시 중랑구 면목동<img
            class="downArrow"
            src="../images/downArrowIcon.png"
          />
        </div>
        <div class="chiArea">
          <div class="oranBorder">전체</div>
          <div class="whiteborder">🏌🏼 활동/건강</div>
          <div class="whiteborder">🎤 문화/예술</div>
          <div class="whiteborder">🍖 음식</div>
          <div class="whiteborder">✈️ 여행</div>
          <div class="whiteborder">🔜 기타 등등</div>
        </div>
        <div class="moimListArea">
          <div class="moimListImgTittle">
            <div class="moimListImg"></div>
            <div class="titleAddArea">
              <div class="moimListTitle">수도권 둘레길 걷기 60대 들의</div>
              <div class="moimListAdd">
                <img class="listAddicon" src="../images/areaIcon.png" />중랑구
                면목동 7명
              </div>
            </div>
          </div>
          <div class="chiTagArea">
            <div class="whiteTag">🏌🏼 활동/건강</div>
            <div class="tag">헬스</div>
            <div class="tag">등산</div>
            <div class="tag">자전거</div>
          </div>
        </div>
        <div class="makeMoim" onclick="location.href='../makeMoim/makeMoim.html'">
          <img class="plus" src="../images/plusIcon.png" />
          <dic class="makeMoText">모임 만들기</dic>
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