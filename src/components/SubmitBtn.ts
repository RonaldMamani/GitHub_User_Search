import styled from "styled-components";

export const SubmitBtn = styled.button`
    background: #0079ff;
    border: none;
    height: 100%;
    border-radius: 1rem;
    line-height: 2.1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    width: 8.4rem;
    transition: all 0.3s ease-out;

    &:hover {
        filter: brightness(1.05);
        box-shadow: 0px 0px 15px -3px #0079ff;
    }

    @media (min-width: 768px) {
        width: 10.6rem;
        font-size: 1.7rem;
    }
`;