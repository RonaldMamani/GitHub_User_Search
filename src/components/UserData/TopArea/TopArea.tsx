import styled from "styled-components";

import { Pfp } from "./Pfp";
import { SideInfo } from "./SideInfo";
import { Name } from "./Name";
import { Username } from "./Username";
import { JoinedAt } from "./JoinedAt";
import { Bio } from "./Bio";

interface TopAreaProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export const TopArea = ({
  username,
  name,
  joinedAt,
  bio,
  pfp,
}: TopAreaProps) => {

  return (
    <>
      <Info>
        <Pfp src={pfp} alt={name} />
        <SideInfo>
          <Name>{name}</Name>
          <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Username>

          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  );
};

const Info = styled.div`
  display: flex;
  align-items: center;
`;
