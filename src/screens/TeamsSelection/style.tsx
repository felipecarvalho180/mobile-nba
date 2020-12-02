import styled from 'styled-components/native'
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight

export const TeamsWrapper = styled.SafeAreaView`
  flex: 1;
  /* width: 100%; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  padding-top: ${statusBarHeight + 10}px;
  /* justify-content: center; */
`;

export const TeamScroll = styled.ScrollView`
  /* display: flex;
  flex-direction: row; */
  background-color: aliceblue;
  /* flex: 1;
  width: 100%; */
`;