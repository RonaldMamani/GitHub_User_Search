import styled from "styled-components";

export const Pfp = styled.img`
    height: 117px;
    width: 117px;
    border-radius: 50%;
    margin-right: 3.7rem;
    display: none;

    @media (min-width: 900px) {
        display: block;
    }
`;