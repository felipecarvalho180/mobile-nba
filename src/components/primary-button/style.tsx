import styled from "styled-components/native";
import { NBA_BLUE_COLOR, SECONDARY_COLOR } from "../../constants/colors";

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${NBA_BLUE_COLOR};
  width: 80px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 5px;
`;

export const ButtonLabel = styled.Text`
  color: ${SECONDARY_COLOR};
  font-size: 18px;
  text-align: center;
`;