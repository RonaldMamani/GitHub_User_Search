import styled from "styled-components";

export const SideInfo = styled.div`
    display: grid;

    @media (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;

        span:last-of-type {
        grid-column: 2 /3;
        grid-row: 1 /2;
        justify-self: end;
        }
    }
`;