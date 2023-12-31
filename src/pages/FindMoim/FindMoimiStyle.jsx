import styled from "styled-components";

export const FindMoim = styled.div`
  padding-bottom: 30%;
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

  .titleBox {
    display: flex;
    padding: 2px 10px 0px 10px;
    box-sizing: border-box;
  }

  .title {
    padding: 12px;
    color: var(--Gray-Cgray400, #c4c7d4);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    box-sizing: border-box;
  }

  .selTitle {
    padding: 12px;
    color: var(--primary-secondary-secondary, #f5935c);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    box-sizing: border-box;
    border-bottom: 2px solid var(--primary-secondary-secondary, #f5935c);
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
  .moim1jung {
    height: 184px;
    position: relative;
    box-sizing: border-box;
    margin: 12px 16px 14px 16px;
    border-radius: 12px;
    border: 1px solid var(--gray-gray-300, #d6d7e1);
  }

  .moimTitleArea {
    display: flex;
    height: 36px;
    background: #f5935c;
    overflow: hidden;
    position: relative;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  .moimMinImg {
    border-radius: 100px;
    background-image: url("../images/A.png");
    background-size: cover;
    width: 24px;
    height: 24px;
    position: relative;
  }

  .moimTitleText {
    width: max-content;
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-pure, #fff);
  }

  .moimNeyoungArea {
    height: 148px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 8px;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;
  }

  .moimWhen {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    height: 24px;
    color: var(--gray-gray-700, #5c5f70);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .grayMin {
    color: var(--gray-gray-500, #afb2c0);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }

  .grayMid {
    color: var(--gray-gray-500, #afb2c0);
  }

  .red {
    color: var(--Red, #eb5757);
  }

  .illjungCham {
    height: 44px;
    box-sizing: border-box;
    margin: 8px 16px 12px 16px;
    background: var(--primary-secondary-secondary, #f5935c);
    border-radius: 100px;
    position: relative;
    display: flex;
    padding: 12px 40px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    align-items: center;
    justify-content: center;
  }

  .dot {
    width: 100%;
    height: 8px;
    position: relative;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .blackGrayDot {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #c4c7d4;
  }

  .grayDot {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #e7e8ee;
  }

  .searchArea {
    margin: 24px 16px 16px 16px;
    position: relative;
  }

  .search {
    width: 100%;
    height: 56px;
    box-sizing: border-box;
    padding: 17px 12px;
    border-radius: 4px;
    border: 1px solid var(--Gray-Cgray300, #d6d7e1);
  }

  input[type="text"].search::placeholder {
    color: #8a8d9e;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  .searchIcon {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 12px;
    top: 16px;
  }

  .address {
    width: 100%;
    position: relative;
    padding: 8px 16px 16px 16px;
    box-sizing: border-box;
    color: var(--gray-gray700, #5c5f70);
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .downArrow {
    width: 20px;
    height: 20px;
    position: relative;
    margin-left: 10px;
  }

  .chiArea {
    height: 40px;
    margin: 4px 16px 18px 16px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    gap: 8px;
    position: relative;
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
    box-sizing: border-box;
    position: relative;
  }

  .oranBorder {
    width: max-content;
    height: max-content;
    display: flex;
    padding: 8px 16px;
    border-radius: 30px;
    border: 1px solid var(--primary-secondary-secondary, #f5935c);
    background: rgba(251, 205, 171, 0.12);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    flex: none;
    color: var(--primary-secondary-secondary, #f5935c);
    position: relative;
  }

  .moimListArea {
    padding: 10px 16px 16px 16px;
    width: 100%;
    position: relative;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--gray-gray200, #e7e8ee);
    box-sizing: border-box;
  }

  .moimListImgTittle {
    width: 100%;
    display: flex;
    gap: 8px;
  }

  .moimListImg {
    border-radius: 100px;
    background-image: url("../images/A.png");
    background-size: cover;
    width: 100px;
    height: 100px;
    position: relative;
  }

  .moimListTitle {
    width: max-content;
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px; /* 130% */
    position: relative;
  }

  .titleAddArea {
    position: relative;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
  }

  .moimListAdd {
    width: max-content;
    line-height: 20px;
    display: flex;
    gap: 4px;
    color: var(--gray-gray700, #5c5f70);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px; /* 125% */
    position: relative;
  }

  .listAddicon {
    width: 18px;
    height: 18px;
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

  .chiTagArea {
    width: 100%;
    height: 34px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    gap: 8px;
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

  .makeMoim {
    justify-content: center;
    width: 200px;
    height: 48px;
    position: fixed;
    display: flex;
    padding: 12px 40px;
    gap: 4px;
    border-radius: 100px;
    background: var(--primary-secondary-secondary, #f5935c);
    box-sizing: border-box;
    bottom: 82px;
    right: 16px;
    align-items: center;
  }

  .plus {
    width: 16px;
    height: 16px;
    position: relative;
  }

  .makeMoText {
    width: max-content;
    line-height: 24px;
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-pure, #fff);
  }

  .none {
    width: 100%;
    height: 106px;
    position: relative;
    box-sizing: border-box;
    display: flex;
  }

  .nonenone {
    width: 100%;
    height: 106px;
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

  .moimjag {
    display: flex;
    align-items: center;
    position: relative;
    color: var(--primary-secondary-secondary, #f5935c);
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 12px; /* 100% */
    margin-bottom: -4px;
  }

  .crown {
    position: relative;
    width: 16px;
    height: 16px;
    margin: 0 4px;
  }

  .kakao0you {
    width: 100%;
    display: flex;
    padding: 12px 0;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: var(--kakao-bg, #fee500);
    color: var(--kakao-text, rgba(0, 0, 0, 0.85));
    font-size: 16px;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
  }

  .kakao {
    width: 18px;
    height: 18px;
    margin-right: 20px;
  }

  .typeChiArea {
    width: 100%;
    padding: 24px 16px 18px 16px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .typeTagList {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    position: relative;
    overflow-y: auto;
  }

  .tagList {
    height: 40px;
    position: relative;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
    padding-left: 12px;
    align-items: center;
  }

  .backBtn {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    left: 16px;
  }
`;
