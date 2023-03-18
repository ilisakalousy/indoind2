import styled from "styled-components";

export const StyledWrapper = styled.section`
    width: 100%;
    max-width: 600px;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
    }
`;