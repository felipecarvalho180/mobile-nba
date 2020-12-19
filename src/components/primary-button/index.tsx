import React from 'react'
import { ButtonLabel, ButtonWrapper } from './style'

interface SecondaryButtonProps {
  onPress: () => void
}

const PrimaryButton: React.FC<SecondaryButtonProps> = ({ onPress }) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonLabel>Sim</ButtonLabel>
    </ButtonWrapper>
  )
}

export default PrimaryButton