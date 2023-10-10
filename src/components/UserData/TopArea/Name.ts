import styled from "styled-components";

export const Name = styled.strong`
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.textBolded};

    @media (min-width: 768px) {
        font-size: 2.7rem;
    }
`;