import { Accordion } from "@mui/material";
import { useState } from "react";

export const ControlledAccordion = ({ children, defaultOpen, ...props }) => {
  const [expanded, setExpanded] = useState(defaultOpen || false);

  const handleChange = (_, expanded) => {
    setExpanded(expanded);
  };

  return (
    <Accordion onChange={handleChange} expanded={expanded} {...props}>
      {children}
    </Accordion>
  );
};
