import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 450px) {
        max-width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledInputWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
    background-color: transparent;

    &:not(:first-child) {
        margin-top: 30px;
    }

    @media (max-width: 450px) {
        height: 60px;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border: 2px solid #3F00FF;
    font-size: 16px;
    padding-left: 10px;
    position: relative;
    
    &:focus {
        outline: none;
    }

    @media (max-width: 450px) {
        height: 60px;
        font-size: 22px;
    }
`;

export const StyledPlaceTitle = styled.span`
    width: 40px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    left: 12px;
    top: -5px;

    @media (max-width: 450px) {
        font-size: 16px;
    }
`;

export const StyledPlaceBody= styled.span`
    width: 80px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    left: 12px;
    top: -5px;

    @media (max-width: 450px) {
        font-size: 16px;
        width: 100px;
    }
`;

export const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background-color: rgb(31, 81, 255);
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 30px;

    &:hover {
        background-color: rgba(31, 81, 255, 0.8);
        
    }

    &:disabled {
        background-color:   rgba(31, 81, 255, 0.3);
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`;