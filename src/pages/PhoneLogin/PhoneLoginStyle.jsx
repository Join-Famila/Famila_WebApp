// PhoneLoginStyle.jsx

import styled from "styled-components";

export const background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  background-color: #ffffff;
  margin: 0px;
  padding: 0px;
`;

export const form = styled.form``;

export const window = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  background-color: #ffffff;
  margin: 0px;
  padding: 0px;
`;

export const titleArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100vw;
  /* height: 100vh; */
  margin: 0 auto;
  padding: 0px;
  position: relative;
  overflow-y: auto;
  -ms-overflow-style: none; /*IE and Edge*/
`;

export const BackIcon = styled.div``;

export const backBtn = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #e7e8ee inset;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
`;

export const titleText = styled.div`
  width: max-content;
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const inputArea = styled.fieldset`
  width: 100%;
  height: 250px;
  margin-top: 16px;
  border: none;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`;

export const midTilte = styled.div`
  width: 100%;
  height: 26px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 16px;
`;

export const NumBalsongContainer = styled.div`
  width: 38%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  background: #ffffff;
  color: #5c5f70;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const NumInput = styled.input`
  width: 60%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  text-indent: 12px;
`;

export const BalsongInput = styled.input`
  width: 38%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  background: #ffffff;
  color: #5c5f70;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const InzungInput = styled.input`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d6d7e1;
  text-indent: 12px;
  margin-bottom: 3px;
`;

export const okArea = styled.fieldset`
  width: 100%;
  padding: 0 16px 20px 16px;
  box-sizing: border-box;
  border: none;
  position: absolute;
  bottom: 0;
`;

export const okBtn = styled.fieldset`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 100px;
  background: var(--primary-secondary-secondary, #f5935c);

  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
