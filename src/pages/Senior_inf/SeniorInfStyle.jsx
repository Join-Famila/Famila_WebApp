import styled from "styled-components";

export const SeniorInf = styled.div`
  padding-bottom: 10%;
  .titleArea {
    width: 100%;
    height: 56px;
    position: relative;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px #e7e8ee inset;
  }

  .backBtn {
    width: 24px;
    height: 24px;
    position: absolute;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .titleText {
    width: max-content;
    position: relative;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }

  .formBox {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    margin-top: 16px;
    padding: 16px;
  }

  .profileImgText {
    width: 100%;
    line-height: 26px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    position: relative;
    margin-bottom: 12px;
  }

  .imgArea {
    width: 100%;
    height: 90px;
    position: relative;
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }

  .imgView {
    width: 90px;
    height: 90px;
    position: relative;
    border-radius: 12px;
  }

  .imgBtn {
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
  }

  .cmr {
    width: 32px;
    height: 32px;
    position: relative;
  }

  .imgText {
    width: auto;
    line-height: 22px;
    color: #8a8d9e;
    font-size: 16px;
    font-weight: 500;
  }

  .notice {
    width: 100%;
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
  }

  .infoIcon {
    width: 18px;
    height: 18px;
    position: relative;
  }

  .notiText {
    width: max-content;
    position: relative;
    color: #8a8d9e;
    font-size: 15.2px;
    font-weight: 500;
    line-height: 18px;
    height: 18px;
  }

  .midText {
    width: 100%;
    line-height: 26px;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    position: relative;
    margin-bottom: 12px;
  }

  .name {
    width: 100%;
    height: 56px;
    position: relative;
    box-sizing: border-box;
    padding: 0px 12px;
    border-radius: 4px;
    border: 1px solid var(--gray-cgray-300, #d6d7e1);
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }

  input::placeholder {
    color: #afb2c0;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }

  [type="radio"]:checked {
    accent-color: #f5935c;
  }

  [type="radio"] {
    margin: 0 0 0 0;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    outline: none;
  }

  .genderArea {
    width: 100%;
    height: 27px;
    position: relative;
    display: flex;
    gap: 20%;
    margin-bottom: 32px;
  }

  .radioArea {
    width: 60px;
    height: 27px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .radioText {
    width: auto;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    position: relative;
  }

  .loca {
    width: 100%;
    height: 56px;
    padding: 0px 12px;
    position: relative;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid var(--gray-cgray-300, #d6d7e1);
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }

  .okArea {
    width: 100%;
    padding-bottom: 20px;
    box-sizing: border-box;
    border: none;
    position: relative;
  }

  .okBtn {
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
  }

  .none {
    width: 100%;
    height: 90px;
    position: relative;
    box-sizing: border-box;
    display: flex;
  }

  .nonenone {
    width: 100%;
    height: 90px;
    position: relative;
  }

  .Nav {
    width: 100%;
    height: 70px;
    border-top: 1px solid var(--gray-cgray-200, #e7e8ee);
    bottom: 0;
    position: fixed;
    box-sizing: border-box;
    padding: 12px 0px;
    display: flex;
    background: #fff;
  }

  .navArea {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    gap: 8px;
  }

  .navIcon {
    width: 24px;
    height: 24px;
    position: relative;
  }

  .navOrangeText {
    position: relative;
    color: var(--primary-secondary-secondary, #f5935c);
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
  }

  .navText {
    position: relative;
    color: var(--gray-gray-600, #8a8d9e);
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
  }

  .moimJujaeArea {
    width: 100%;
    height: 34px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    gap: 8px;
    margin-bottom: 12px;
  }

  .whiteTag {
    width: max-content;
    height: max-content;
    display: flex;
    padding: 6px 12px;
    border-radius: 30px;
    border: 1px solid #afb2c0;
    background: rgba(255, 255, 255, 0.12);
    font-size: 16px;
    font-weight: 500;
    flex: none;
    box-sizing: border-box;
    line-height: 20px;
  }

  .tag {
    height: max-content;
    position: relative;
    width: max-content;
    display: flex;
    padding: 6px 12px;
    box-sizing: border-box;
    align-items: center;
    border-radius: 30px;
    border: 1px solid var(--gray-gray500, #afb2c0);
    background: var(--gray-gray200, #e7e8ee);
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-gray700, #5c5f70);
    line-height: 20px;
  }

  .moimJujaeBtn {
    width: 100%;
    border-radius: 100px;
    border: 1px solid var(--primary-secondary-secondary, #f5935c);
    background: var(--gray-Pure, #fff);
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
    position: relative;
    color: var(--primary-secondary-secondary, #f5935c);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 32px;
  }

  .moimSogae {
    border-radius: 6px;
    border: 1px solid var(--muted-muted-300, #d4d4d4);
    background: var(--muted-muted-50, #fafafa);
    position: relative;
    width: 100%;
    height: 136px;
    padding: 8px 4px 8px 12px;
    box-sizing: border-box;
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }

  textarea.moimSogae::placeholder {
    color: var(--text-text-500, #737373);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }

  .head {
    width: 100%;
    height: 56px;
    padding: 18px 80px;
    box-sizing: border-box;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    box-shadow: 0 0 0 1px #e7e8ee inset;
    position: relative;
  }

  .leftArrow {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    left: 16px;
  }

  .midTitle {
    position: relative;
    padding: 16px 16px 0 16px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    width: 100%;
  }

  .chiArea {
    width: 100%;
    height: 60px;
    padding: 4px 16px 18px 16px;
    box-sizing: border-box;
    margin-top: 16px;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    gap: 8px;
  }

  .whiteborder {
    width: max-content;
    height: max-content;
    display: flex;
    padding: 8px 16px;
    border-radius: 30px;
    border: 1px solid #afb2c0;
    background: rgba(255, 255, 255, 0.12);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    flex: none;
  }

  .chiTagArea {
    width: 100%;
    padding: 16px 16px 40px 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    box-sizing: border-box;
  }

  .chiNotice {
    width: max-content;
    height: 38px;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 8px 12px 8px 8px;
    border-radius: 4px;
    border: 1px solid var(--gray-cgray-200, #e7e8ee);
    box-sizing: border-box;
    margin: 0 16px 10px 16px;
    box-sizing: border-box;
    gap: 4px;
  }

  .wanBtn {
    height: 44px;
    margin: 0 16px 20px 16px;
    border-radius: 100px;
    border: 1px solid var(--primary-secondary-secondary, #f5935c);
    background: var(--primary-secondary-secondary, #f5935c);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wanText {
    color: var(--gray-Pure, #fff);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
  }
`;
