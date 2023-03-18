import styled from "styled-components";

import { ReactComponent as Loupe } from "../../../assets/loupe.svg";

export const SearchWrapper = styled.div`
    max-width: 250px;
    width: 100%;
    height: 30px;
    background-color: transparent;
    position: relative;
`;

export const StyledInput = styled.input`
    max-width: 250px;
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 14px;
    padding-left: 40px;
    

    &:focus {
        outline: none;
    }
`;

export const StyledLoupe = styled(Loupe)`
    position: absolute;
    width: 25px;
    height: 25px;
    top: 3px;
    left: 2px;
`;