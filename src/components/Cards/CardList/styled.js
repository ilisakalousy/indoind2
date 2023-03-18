import styled from "styled-components";

export const StyledList = styled.div`
    width: 100%;
    max-width: 600px;
    height: calc(100vh - 70px);
    background-color: #fff;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
            display: none;
        }

    @media (max-width: 600px) {
        width: 100%;
    }
`;