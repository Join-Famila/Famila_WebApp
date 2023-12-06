// PhoneLoginStyle.jsx

import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px; /* 왼쪽 여백 추가 */
`;

export const BackIcon = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 30px; /* BackIcon의 크기 조절 */
    height: 30px; /* BackIcon의 크기 조절 */
`;

export const BackImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    flex: 1;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-right: 55px; /* 왼쪽으로 이동시키기 위한 마진 추가 */
`;

export const Line = styled.hr`
    width: 100%;
`;

export const Boxes = styled.div`
    display: flex;
    align-items: flex-start; /* 수정된 부분: 컬럼 시작을 위해 flex-start로 변경 */
    justify-content: center; /* 수정된 부분: 전체를 가운데 정렬 */
    flex-direction: row; /* 수정된 부분: 가로로 정렬 */
`;

export const PhoneNumber = styled.p`
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 5px;
    align-self: flex-start; /* 수정된 부분: 왼쪽 정렬 */
`;

export const InputPhoneNumber = styled.input`
    width: 40%; /* 수정된 부분: 너비 조절 */
    padding: 10px; /* 수정된 부분: 내부 콘텐츠의 높이 조절 */
    margin-right: 5%; /* 수정된 부분: 우측 마진 추가 */
    margin-bottom: 10px; /* 간격을 조절하기 위한 마진 추가 */
`;

export const SendCertiNum = styled.button`
    width: 40%; /* 수정된 부분: 너비 조절 */
    padding: 10px; /* 수정된 부분: 내부 콘텐츠의 높이 조절 */
    margin-left: 5%; /* 수정된 부분: 좌측 마진 추가 */
    margin-bottom: 10px; /* 간격을 조절하기 위한 마진 추가 */
`;

export const InputCertiNum = styled.input`
    width: 90%; /* 수정된 부분: 너비 조절 */
    padding: 10px; /* 수정된 부분: 내부 콘텐츠의 높이 조절 */
    margin-left: 2%; /* 수정된 부분: 좌측 마진 추가 */
    margin-bottom: 10px; /* 간격을 조절하기 위한 마진 추가 */
`;

export const CheckButton = styled.button`
    width: 90%;
    height: 5%;
    background-color: #F5935C;
    margin-top: 90%;
    color: white;
    font-size: 23px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;
