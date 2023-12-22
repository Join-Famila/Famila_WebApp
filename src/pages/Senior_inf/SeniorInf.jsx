import React, { useState } from "react";
import * as styles from "./SeniorInfStyle";
import { useNavigate, Link } from "react-router-dom";
import arrowLeftImg from "../../assets/arrow-left.png";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

const SeniorInf = () => {
  const navigate = useNavigate();
  const goHome = () => {
    alert("정보 입력이 완료되었습니다.");
    navigate("/");
  };
  const goBack = () => {
    window.history.back();
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
        정보 입력
      </div>
      <form className="formBox">
        <div className="profileImgText">프로필 사진</div>
        <div className="imgArea">
          <label>
            <div className="imgBtn">
              <img className="cmr" src="../images/camera_icon.png" />
              <div className="imgText">
                <span>0</span>/1
              </div>
            </div>
            <input
              name="addImg"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="notice">
          <img src="../images/info_icon.png" className="infoIcon" />
          <div className="notiText">얼굴이 보이는 실물사진을 첨부해주세요.</div>
        </div>
        <div className="midText">이름</div>
        <input
          name="seniorName"
          type="text"
          placeholder="실명을 입력해주세요"
          className="name"
        />
        <div className="midText">성별</div>
        <div className="genderArea">
          <label className="radioArea">
            <input name="seniorGender" type="radio" value="male" checked />
            <div className="radioText">남성</div>
          </label>
          <label className="radioArea">
            <input name="seniorGender" type="radio" value="female" />
            <div className="radioText">여성</div>
          </label>
        </div>
        <div className="midText">활동 지역</div>
        <input
          name="seniorLoca"
          type="text"
          list="locations"
          placeholder="거주하는 동네를 입력해주세요"
          className="loca"
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
        <div className="midText">나이</div>
        <input
          name="seniorAge"
          type="number"
          list="age"
          placeholder="나이를 입력해주세요"
          className="loca"
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

        <div className="okArea">
          <input
            type="submit"
            onClick={goHome}
            name="ok"
            value="확인"
            className="okBtn"
          />
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
