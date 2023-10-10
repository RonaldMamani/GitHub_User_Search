import styled from "styled-components";
import { Data } from "./Data";

interface StastsAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export const StartArea = ({ repos, followers, following }: StastsAreaProps) => {
  return (
    <Container>
      <Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </Data>

      <Data>
        <span>Followers</span>
        <strong>{followers}</strong>
      </Data>

      <Data>
      <span>Following</span>
        <strong>{following}</strong>
      </Data>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  padding: 1.8rem 1.4rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.8rem 3.2rem;
  }
`;

