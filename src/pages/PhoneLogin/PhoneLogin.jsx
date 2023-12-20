
import React, { useState } from 'react';
import * as styles from './PhoneLoginStyle';
import BackIcon from '../../../src/assets/left.png';

export default function PhoneLogin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [certiNum, setCertiNum] = useState('');

    const handleSendCertiNum = () => {
        // TODO: 인증번호를 서버로 요청 및 전송하는 로직
    };

    const handleCheckButton = () => {
        // TODO: 서버로 휴대폰 번호와 인증번호를 전송하여 확인하는 로직
    };

    return (
        <styles.background>
        <styles.window>
          <styles.titleArea>
            <styles.backBtn> 
                {/* history.back() */}
              <styles.BackIcon src={BackIcon}/>
            </styles.backBtn>
            <styles.titleText>휴대폰 번호로 로그인</styles.titleText>
          </styles.titleArea>
          <styles.form>
            <styles.inputArea>
              <styles.midTilte>휴대폰 번호</styles.midTilte>
              <styles.NumBalsongContainer>
            <styles.NumInput
                type="tel"
                name="phoneNum"
                placeholder="전화번호 입력(-빼고)"
                className="num"
            />
            <styles.BalsongInput
                type="submit"
                name="balSong"
                value="인증번호 발송"
                className="balsong"
            />
            </styles.NumBalsongContainer>
            <styles.InzungInput
                type="number"
                name="inzung_input"
                placeholder="인증번호 입력"
                className="inzung_input"
            />
            </styles.inputArea>
            <styles.okArea>
                <styles.okBtn
                    type="submit"
                    name="ok"
                    value="확인"
                    className="okBtn"
            />
            </styles.okArea>
          </styles.form>
        </styles.window>
      </styles.background>
    );
}
