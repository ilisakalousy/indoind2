import styled from "styled-components";

import { ReactComponent as Close } from "../../../assets/close.svg";

export const PopupWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const PopupBody = styled.div`
    max-width: 530px;
    width: 100%;
    height: 300px;
    padding: 15px;
    padding-top: 70px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;

    @media (max-width: 450px) {
        width: 100%;
        max-width: 100%;
        height: 100vh;
        border-radius: 0;
    }
`;

export const StyledClose = styled(Close)`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;