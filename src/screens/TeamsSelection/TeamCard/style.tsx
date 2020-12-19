import Animated from 'react-native-reanimated';
import styled from 'styled-components/native'
import { NBA_BLUE_COLOR, SECONDARY_COLOR } from '../../../constants/colors';

export const BorderWrapper = styled.TouchableOpacity`
  padding: 2px;
  background-color: ${SECONDARY_COLOR};
  margin: 5px;
  border-radius: 10px;
`;

export const CardWrapper = styled(Animated.View)`
  width: 100%;
  background-color: ${SECONDARY_COLOR};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${NBA_BLUE_COLOR};
  border-width: 2px;
`;

export const ImageWrapper = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
`;

export const TitleWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${NBA_BLUE_COLOR};
`;