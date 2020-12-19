import React from 'react'
import { ButtonLabel, ButtonWrapper } from './style'

interface SecondaryButtonProps {
  onPress: () => void
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onPress }) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonLabel>Não</ButtonLabel>
    </ButtonWrapper>
  )
}

export default SecondaryButton