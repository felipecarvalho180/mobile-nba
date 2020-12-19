import React from 'react';
import { Team } from '../../../services/Teams/teams.service';
import { BorderWrapper, CardWrapper, ImageWrapper } from './style';

interface TeamCardProps {
  team: Team
  onPress: (team: Team) => void
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onPress }) => {
  const { WikipediaLogoUrl } = team

  return (
    <BorderWrapper onPress={() => onPress(team)}>
      <CardWrapper>
        <ImageWrapper source={{ uri: WikipediaLogoUrl }} />
      </CardWrapper>
    </BorderWrapper>
  )
}

export default TeamCard;