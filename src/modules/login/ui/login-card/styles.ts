import styled from "styled-components";
import {Card} from "@mui/material";

export const StyledCard = styled(Card)`
  && {
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 23rem;
  }
`;