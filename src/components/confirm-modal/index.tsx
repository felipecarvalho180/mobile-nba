import React from 'react'
import { Team } from '../../services/Teams/teams.service'
import PrimaryButton from '../primary-button'
import SecondaryButton from '../secondary-button'
import { ButtonsWrapper, Logo, LogoWrapper, Message, MessageWrapper } from './style'

interface ConfirmModalProps {
  team: Team
  onPress: (team: Team) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ team, onPress }) => {
  const { WikipediaLogoUrl, City, Name } = team;

  return (
    <MessageWrapper>
      <LogoWrapper>
        <Logo source={{ uri: WikipediaLogoUrl }} />
      </LogoWrapper>
      <Message>Você confirma {City} {Name} como seu time favorito ?</Message>
      <ButtonsWrapper>
        <PrimaryButton />
        <SecondaryButton onPress={() => onPress(team)} />
      </ButtonsWrapper>
    </MessageWrapper>
  )
}

export default ConfirmModal