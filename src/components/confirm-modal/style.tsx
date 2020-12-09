import styled from "styled-components/native";
import { NBA_BLUE_COLOR } from "../../constants/colors";

export const MessageWrapper = styled.View`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  padding-top: 50px;
  border-radius: 10px;
`;

export const LogoWrapper = styled.View`
  padding: 10px;
  background-color: ${NBA_BLUE_COLOR};
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  margin-top: -95px;
  margin-bottom: 10px;
  border-width: 3px;
  border-color: #fff;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
  align-self: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;
