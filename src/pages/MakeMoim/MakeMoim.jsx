import React, { useState } from "react";
import * as styles from "./MakeMoimStyle";
import { useNavigate, Link } from "react-router-dom";
import arrowLeftImg from "../../assets/arrow-left.png"
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const MakeMoim = () => {
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
    <styles.MakeMoim>
      <div className="head">
        <img
          className="leftArrow"
          src={arrowLeftImg}
          alt="img"
          onClick={goBack}
        />
        모임 만들기
      </div>
      <form class="formBox">
          <div class="midText">모임명</div>
          <input
            name="moimName"
            type="text"
            placeholder="모임 이름을 입력해주세요"
            class="name"
          />
          <div class="midText">모임 소개</div>
          <textarea
            name="moimSogae"
            placeholder="모임 소개를 입력해주세요"
            class="moimSogae"
          ></textarea>
          <div class="midText">활동 지역(도,시,군/구,동으로 적어주세요.)</div>
          <input
            name="moimLoca"
            type="text"
            placeholder="모임 활동 지역을 입력해주세요"
            class="loca"
          />
          <div class="midText">모임 주제</div>
          <div class="moimJujaeArea">
            <div class="whiteTag">🏌🏼 활동/건강</div>
            <div class="tag">헬스</div>
            <div class="tag">등산</div>
            <div class="tag">자전거</div>
          </div>
          <div class="moimJujaeBtn" onclick="location.href='./moimJujae.html'">모임 주제 선택 +</div>
          <div class="profileImgText">대표사진</div>
          <div class="imgArea">

            <label>
              <div class="imgBtn">
                <img class="cmr" src="../images/camera_icon.png" />
                <div class="imgText"><span>0</span>/5</div>
              
              </div>
              <input
                name="addMoimImg"
                type="file"
                accept="image/*"
                style="display: none"
              />
            </label>
          </div>
          <div class="okArea">
            <input type="submit" name="ok" value="모임등록" class="okBtn" />
          </div>
        </form>

      <BottomSheet
        isOpen={isOpen}
        toggleBottomSheet={toggleBottomSheet}
        selectBottomSheetPage={"showLocationSearch"}
        setSelectLocation={setSelectLocation}
      />
      <FooterMenu />
    </styles.MakeMoim>
  );
};

export default MakeMoim;