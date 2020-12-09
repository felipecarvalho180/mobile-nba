import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native'

interface ComponentsProps {
  color?: string
}

export const BorderWrapper = styled.TouchableOpacity`
  padding: 2px;
  background-color: #fff;
  margin: 5px;
  border-radius: 10px;
  width: 100%;
`;

export const CardWrapper = styled(Animated.View)`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props: ComponentsProps) => props.color && css`
    border-color: #${props.color};
    border-width: 1px;
  `}
`;

export const ImageWrapper = styled.Image`
  width: 120px;
  height: 120px;
  align-self: center;
  margin-right: 10px;
`;

export const TitleWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  ${(props: ComponentsProps) => props.color && css`
    color: #${props.color};
  `}
`;