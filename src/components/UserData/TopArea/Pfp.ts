import styled from "styled-components";

export const Pfp = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50%;
    margin-right: 2rem;

    @media (min-width: 768px) {
        width: 117px;
        height: 117px;
        margin-right: 4.1rem;
    }

    @media (min-width: 900px) {
        display: none;
    }
`;