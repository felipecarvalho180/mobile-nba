import React from 'react';
import { Team } from '../../../services/Teams/teams.service';
import { BorderWrapper, CardWrapper, ImageWrapper, Title, TitleWrapper } from './style';

interface TeamCardProps {
  team: Team
  onPress: (team: Team) => void
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onPress }) => {
  const { PrimaryColor, WikipediaLogoUrl, City, Name } = team

  return (
    <BorderWrapper onPress={() => onPress(team)}>
      <CardWrapper color={PrimaryColor}>
        <ImageWrapper source={{ uri: WikipediaLogoUrl }} />
        <TitleWrapper>
          <Title color={PrimaryColor} >{City}</Title>
          <Title color={PrimaryColor}>{Name}</Title>
        </TitleWrapper>
      </CardWrapper>
    </BorderWrapper>
  )
}

export default TeamCard;