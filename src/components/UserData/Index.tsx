import styled from "styled-components";
import { TopArea } from "./TopArea/TopArea";
import LinksArea from "./LinksArea/LinksArea";
import { StartArea } from "./StartArea/StartArea";
import { UserDataProps } from "../../types";

import { SideArea } from "./SideArea";
import { Pfp } from "./Pfp";

export const Index = ({ user }: UserDataProps) => {
  return (
    <Container>
      <Pfp src={user.pfp} alt={user.name} />

      <SideArea>
        <TopArea
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        />

        <StartArea
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <LinksArea links={user.links}/>
      </SideArea>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};

  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

