import React, { useState } from "react";
import * as styles from "./SeniorInfStyle";
import { useNavigate, Link } from "react-router-dom";
import arrowLeftImg from "../../assets/arrow-left.png"
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const SeniorInf = () => {
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
    <styles.SeniorInf>
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
          <div class="profileImgText">프로필 사진</div>
          <div class="imgArea">
            <label>
              <div class="imgBtn">
                <img class="cmr" src="../images/camera_icon.png" />
                <div class="imgText"><span>0</span>/1</div>
              </div>
              <input
                name="addImg"
                type="file"
                accept="image/*"
                style="display: none"
              />
            </label>
          </div>
          <div class="notice">
            <img src="../images/info_icon.png" class="infoIcon" />
            <div class="notiText">얼굴이 보이는 실물사진을 첨부해주세요.</div>
          </div>
          <div class="midText">이름</div>
          <input
            name="seniorName"
            type="text"
            placeholder="실명을 입력해주세요"
            class="name"
          />
          <div class="midText">성별</div>
          <div class="genderArea">
            <label class="radioArea">
              <input name="seniorGender" type="radio" value="male" checked />
              <div class="radioText">남성</div>
            </label>
            <label class="radioArea">
              <input name="seniorGender" type="radio" value="female" />
              <div class="radioText">여성</div>
            </label>
          </div>
          <div class="midText">활동 지역</div>
          <input
            name="seniorLoca"
            type="text"
            list="locations"
            placeholder="거주하는 동네를 입력해주세요"
            class="loca"
          />
          <datalist id="locations">
            <option value="서울특별시 강남구 신사동"></option>
            <option value="서울특별시 강남구 논현동"></option>
            <option value="서울특별시 강남구 청담동"></option>
            <option value="서울특별시 강남구 삼성동"></option>
            <option value="서울특별시 강남구 압구정동"></option>
            <option value="서울특별시 강남구 대치동"></option>
            <option value="부산광역시 소래포구 어쩌구"></option>
            <option value="경기도 하남시 미사1동"></option>
          </datalist>
          <div class="midText">나이</div>
          <input
            name="seniorAge"
            type="number"
            list="age"
            placeholder="나이를 입력해주세요"
            class="loca"
          />
          <datalist id="age">
            <option value="53"></option>
            <option value="54"></option>
            <option value="58"></option>
            <option value="59"></option>
            <option value="60"></option>
            <option value="61"></option>
            <option value="62"></option>
          </datalist>

          <div class="okArea">
            <input type="submit" name="ok" value="확인" class="okBtn" />
          </div>
        </form>

      <BottomSheet
        isOpen={isOpen}
        toggleBottomSheet={toggleBottomSheet}
        selectBottomSheetPage={"showLocationSearch"}
        setSelectLocation={setSelectLocation}
      />
      <FooterMenu />
    </styles.SeniorInf>
  );
};

export default SeniorInf;