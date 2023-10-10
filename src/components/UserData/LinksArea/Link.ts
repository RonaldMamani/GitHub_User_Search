import styled from "styled-components";

export const Link = styled.li`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    a {
        display: grid;
        grid-template-columns: 20px 1fr;
    }

    svg {
        width: 20px;
    }

    &.unavailable {
        opacity: 0.5;
    }
`;