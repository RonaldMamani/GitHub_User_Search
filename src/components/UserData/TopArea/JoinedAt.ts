import styled from "styled-components";

export const JoinedAt = styled.span`
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.textNorm};

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }
`;