import styled from "styled-components";

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
    max-width: 330px;
    width: 100%;
    height: 200px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
`;