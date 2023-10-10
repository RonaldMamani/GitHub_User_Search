import styled from "styled-components";

export const Input = styled.input`
    flex: 1;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 192%;
    color: ${(props) => props.theme.colors.textNorm};
    background: none;
    border: none;
    margin: 0 0.8rem;

    @media (min-width: 768px) {
        font-size: 1.7rem;
        margin: 0 2.4rem;
    }

    &:focus {
        outline: 1px dashed #0079ff;
    }
`;