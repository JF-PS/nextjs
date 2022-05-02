import React from "react";
import { Button, Box } from "@dots.cool/design-system";

export default () => (
  <Box>
    <Button
      onClick={() => {
        alert("click");
      }}
    >
      test
    </Button>
  </Box>
);
