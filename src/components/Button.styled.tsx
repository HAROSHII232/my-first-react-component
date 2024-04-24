import { styled } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Button = styled.button`
  width: 86px;
  border-radius: 5px;
  padding: 4px;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  color: ${myTheme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkButton = styled(Button)`
  color: ${myTheme.colors.secondary};
  background-color: ${myTheme.colors.primary};

  &:hover {
    color: ${myTheme.colors.primary};
    border: 2px solid ${myTheme.colors.primary};
    background-color: transparent;
  }
`;

export const SaveButton = styled(Button)`
  color: ${myTheme.colors.primary};
  background-color: transparent;
  border: 2px solid ${myTheme.colors.primary};

  &:hover {
    color: ${myTheme.colors.secondary};
    background-color: ${myTheme.colors.primary};
  }
`;
