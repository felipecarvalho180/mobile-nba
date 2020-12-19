import styled from 'styled-components/native'
import Constants from 'expo-constants'
import Animated from 'react-native-reanimated'
import { PRIMARY_COLOR } from '../../constants/colors'

const statusBarHeight = Constants.statusBarHeight

export const TeamsWrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${PRIMARY_COLOR};
`;

export const SelectedTeamWrapper = styled(Animated.View)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TeamsScroll = styled(Animated.ScrollView)``;

export const TeamsContent = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
`;