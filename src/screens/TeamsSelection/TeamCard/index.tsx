import React from 'react';
import { Team } from '../../../services/Teams/teams.service';
import { CardWrapper } from './style';
// import { SvgCssUri } from 'react-native-svg'

const TeamCard: React.FC<Team> = ({ WikipediaLogoUrl }) => {
  return (
    <CardWrapper source={{ uri: WikipediaLogoUrl }}>
      {/* <SvgCssUri uri={WikipediaLogoUrl} width="150" height="150" /> */}
    </CardWrapper>
  )
}

export default TeamCard;