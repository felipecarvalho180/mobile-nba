import styled from "styled-components/native";
import { NBA_BLUE_COLOR } from "../../constants/colors";

export const ButtonWrapper = styled.TouchableOpacity`
  border-color: ${NBA_BLUE_COLOR};
  border-width: 1px;
  width: 80px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 5px;
`;

export const ButtonLabel = styled.Text`
  color: ${NBA_BLUE_COLOR};
  font-size: 18px;
  text-align: center;
`;