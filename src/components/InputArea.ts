import styled from "styled-components";

export const InputArea = styled.form`
    margin-top: 3.6rem;
    border-radius: 1.5rem;
    background: ${(props) => props.theme.colors.card};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0.7rem 0.7rem 1.6rem;
    transition: height 0.3s ease;
    position: relative;

    @media (min-width: 768px) {
        height: 6.9rem;
    }
`;