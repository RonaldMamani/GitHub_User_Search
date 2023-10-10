import styled from "styled-components";

export const Bio = styled.p`
    color: ${(props) => props.theme.colors.textNorm};
    font-size: 1.4rem;
    line-height: 192%;
    margin: 3.3rem 0 2.3rem;

    @media (min-width: 768px) {
        margin: 2.2rem 0 3.3rem;
        font-size: 1.6rem;
    }
`;