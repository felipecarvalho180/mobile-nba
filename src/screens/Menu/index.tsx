import React, { useEffect, useState } from 'react'
import { TEAM_SERVICE } from '../../constants/services';
import app from '../../services/app';
import { Team } from '../../services/Teams/teams.service'
import { ImageWrapper, MenuWrapper, TeamName, Header } from './style'

const Menu: React.FC = () => {
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    async function getTeam() {
      const response = await app.getStorage({ id: TEAM_SERVICE });
      setTeam(response);
    } getTeam();
  }, [])

  return (
    <MenuWrapper>
      {team && (
        <Header>
          <ImageWrapper source={{ uri: team.WikipediaLogoUrl }} />
          <TeamName>{team.City} {team.Name}</TeamName>
        </Header>
      )}
    </MenuWrapper>
  )
}

export default Menu