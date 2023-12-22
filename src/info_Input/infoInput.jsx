import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Window = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 0 1px #e7e8ee inset;
`;

const TitleArea = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #e7e8ee inset;
  display: flex;
  align-items: center;
`;

const BackBtn = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  cursor: pointer;
`;

const TitleText = styled.div`
  width: max-content;
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

const FormBox = styled.form`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-top: 16px;
  padding: 16px;
`;

const ProfileImgText = styled.div`
  width: 100%;
  line-height: 26px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  position: relative;
  margin-bottom: 12px;
`;

const ImgArea = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

const ImgView = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 12px;
`;

const ImgBtn = styled.label`
  width: 90px;
  height: 90px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: 16px 27px;
  border-radius: 12px;
  border: 1px solid #97b0ea;
  background: #eef2fb;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Cmr = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
`;

const ImgText = styled.div`
  width: auto;
  line-height: 22px;
  color: #8a8d9e;
  font-size: 16px;
  font-weight: 500;
`;

const Notice = styled.div`
  width: 294px;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 8px 8px;
  border-radius: 4px;
  border: 1px solid var(--gray-cgray-200, #e7e8ee);
  box-sizing: border-box;
  margin-bottom: 32px;
`;

const InfoIcon = styled.img`
  width: 18px;
  height: 18px;
  position: relative;
`;

const NotiText = styled.div`
  width: max-content;
  position: relative;
  color: #8a8d9e;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  height: 18px;
`;

const MidText = styled.div`
  width: 100%;
  line-height: 26px;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  position: relative;
  margin-bottom: 12px;
`;

const Name = styled.input`
  width: 100%;
  height: 56px;
  position: relative;
  box-sizing: border-box;
  padding: 0px 12px;
  border-radius: 4px;
  border: 1px solid var(--gray-cgray-300, #d6d7e1);
  margin-bottom: 32px;
`;

const InputPlaceholder = styled.input`
  &::placeholder {
    color: #afb2c0;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
`;

const GenderArea = styled.div`
  width: 100%;
  height: 27px;
  position: relative;
  display: flex;
  gap: 20%;
  margin-bottom: 32px;
`;

const RadioArea = styled.label`
  width: 60px;
  height: 27px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RadioText = styled.div`
  width: auto;
  height: 27px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  position: relative;
`;

const Loca = styled.input`
  width: 100%;
  height: 56px;
  padding: 0px 12px;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--gray-cgray-300, #d6d7e1);
  margin-bottom: 32px;
`;

const OkArea = styled.div`
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
  border: none;
  position: relative;
`;

const OkBtn = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 100px;
  background: #f5935c;
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

function YourComponent() {
  return (
    <Background className="background">
      <Window className="window">
        <TitleArea className="titleArea">
          <BackBtn className="backBtn" onClick={() => window.history.back()}>
            <img src="../images/arrow-left.png" alt="Back" />
          </BackBtn>
          <TitleText className="titleText">정보 입력</TitleText>
        </TitleArea>
        <FormBox className="formBox">
          <ProfileImgText className="profileImgText">프로필 사진</ProfileImgText>
          <ImgArea className="imgArea">
            <ImgBtn>
              <CmrImg className="cmr" src="../images/camera_icon.png" alt="Camera" />
              <ImgText><span>0</span>/1</ImgText>
            </ImgBtn>
            <input
              name="addImg"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
            />
          </ImgArea>
          <Notice className="notice">
            <InfoIcon className="infoIcon" src="../images/info_icon.png" alt="Info" />
            <NotiText className="notiText">얼굴이 보이는 실물사진을 첨부해주세요.</NotiText>
          </Notice>
          <MidText className="midText">이름</MidText>
          <input
            name="seniorName"
            type="text"
            placeholder="실명을 입력해주세요"
            className="name"
          />
          <MidText className="midText">성별</MidText>
          <GenderArea className="genderArea">
            <RadioArea className="radioArea">
              <input name="seniorGender" type="radio" value="male" defaultChecked />
              <RadioText className="radioText">남성</RadioText>
            </RadioArea>
            <RadioArea className="radioArea">
              <input name="seniorGender" type="radio" value="female" />
              <RadioText className="radioText">여성</RadioText>
            </RadioArea>
          </GenderArea>
          <MidText className="midText">활동 지역</MidText>
          <Loca
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
          <MidText className="midText">나이</MidText>
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

          <OkArea className="okArea">
            <OkBtn
              type="submit"
              name="ok"
              value="확인"
              className="okBtn"
            />
          </OkArea>
        </FormBox>
      </Window>
    </Background>
  );
}

export default YourComponent;