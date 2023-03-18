import styled from "styled-components";

import { ReactComponent as Deer } from "../../../assets/deer.svg";

export const StyledNothing = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const NothingHeading = styled.h1`
    font-size: 50px;
    text-align: center;
`;

export const StyledDeer = styled(Deer)`
    width: 200px;
    height: 200px;
    margin: 0 auto;
`;