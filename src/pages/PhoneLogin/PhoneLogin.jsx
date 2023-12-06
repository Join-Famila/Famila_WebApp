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
        <styles.Container>
            <styles.Header>
                <styles.BackIcon>
                    <styles.BackImage src={BackIcon} alt="Back Icon" />
                </styles.BackIcon>
                <styles.Title>휴대폰 번호로 로그인</styles.Title>
            </styles.Header>
            <styles.Line />
            <styles.PhoneNumber>휴대폰 번호</styles.PhoneNumber>
            <styles.Boxes>
            <styles.InputPhoneNumber
                type="text"
                placeholder="-없이 작성해주세요."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <styles.SendCertiNum
                type="button"
                onClick={handleSendCertiNum}
            >
                인증번호 발송
            </styles.SendCertiNum>
            </styles.Boxes>
            <styles.InputCertiNum
                type="text"
                placeholder="인증번호를 입력해주세요"
                value={certiNum}
                onChange={(e) => setCertiNum(e.target.value)}
            />
            <styles.CheckButton
                type="button"
                onClick={handleCheckButton}
            >
                확인
            </styles.CheckButton>
        </styles.Container>
    );
}
