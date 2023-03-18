import styled from "styled-components";

import { ReactComponent as Burger } from "../../../assets/burger.svg";

export const StyledCard = styled.div`
    width: 100%;
    max-width: 350px;
    position: relative;

    @media (max-width: 400px) {
        width: 90%
        
    }
`;

export const CardInner = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #F8F8F8;
        border-radius: 5px;
    }

    @media (max-width: 450px) {
        width: 90%;
        margin-left: auto;
    }
`;

export const StyledHeading = styled.strong`
    font-size: 16px;
    font-weight: 500;
    padding-left: 30px;
    word-break: break-all;
    line-height: 20px;
`;

export const StyledDesc = styled.span`
    font-size: 14px;
    font-weight: 300;
    word-break: break-all;
    margin-top: 5px;
    line-height: 18px;
`;

export const DeleteButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(63, 0, 255, 0.3);
    position: absolute;
    border: 2px solid rgba(63, 0, 255, 1);
    cursor: pointer;

    &:hover {
        background-color: rgba(63, 0, 255, 0.6);
    }
`;

export const DragWrapper = styled.div`
    width: 25px;
    height: 25px;
    background-color: transparent;
    position: absolute;
    left: -30px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: move;
    border-radius: 5px;

    &:hover {
        background-color: #F8F8F8;
    }

    @media (max-width: 450px) {
        left: 0px;
    }
`;

export const DragButton = styled(Burger)`
    width: 25px;
    height: 25px;
`;