import styled from "@emotion/styled";
import { Button as BaseButton } from "@mui/material";

const StyledButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 40px;
  padding: 1rem 2rem;

  &:hover {
    background-color: #f2f2f2;
  }

  & span.custom-text {
    font-weight: 700;
    background-image: linear-gradient(90deg, #b17fe2 16.67%, #b44cf4 84.37%);
    background-clip: text;
  }
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <span className="custom-text">{children}</span>
    </StyledButton>
  );
};
