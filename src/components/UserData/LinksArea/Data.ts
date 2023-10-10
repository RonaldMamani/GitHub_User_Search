import styled from "styled-components";

export const Data = styled.span`
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.textNorm};
    word-break: break-all;
    margin-left: 2rem;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;