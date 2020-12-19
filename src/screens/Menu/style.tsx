import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { NBA_BLUE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/colors';

const statusBarHeight = Constants.statusBarHeight

export const MenuWrapper = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${PRIMARY_COLOR};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${SECONDARY_COLOR};
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${NBA_BLUE_COLOR};
`;

export const ImageWrapper = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const TeamName = styled.Text`
  color: ${NBA_BLUE_COLOR};
  font-size: 24px;
`;