import styled from "styled-components";

import { ReactComponent as Plus } from "../../../assets/plus.svg";

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: #fff;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 600px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media (max-width: 450px) {
        justify-content: space-evenly;
    }
`;

export const AddingButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }

    @media (max-width: 450px) {
        width: 40px;
        height: 40px;
    }
`;

export const StyledPlus = styled(Plus)`
    width: 30px;
    height: 30px;

    @media (max-width: 450px) {
        width: 40px;
        height: 40px;
    }
`;
