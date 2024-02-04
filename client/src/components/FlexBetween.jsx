import { Box } from "@mui/material"; // Box is an mui component used for creating layout containers.
import { styled } from "@mui/system"; // styled is an mui utility that allows you to create styled components using a syntax similar to CSS-in-JS.

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween;