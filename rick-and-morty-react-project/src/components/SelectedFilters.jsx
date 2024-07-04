import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

export default function Tags({ selectedFilters, handleState }) {
  const font = 'sans-serif';
  let { genderTrue, originTrue, speciesTrue } = selectedFilters;

  const MainHeadings = styled(Typography)(() => ({
    fontFamily: font,
    textAlign: "left",
    paddingBottom: "0.5rem",
    fontSize: "1.5rem",
  }));

  const CustomButton = styled(Button)(() => ({
    background: "grey",
    padding: "0.5rem 1rem",
    marginRight: "5px",
    fontSize: "0.8rem",
    alignSelf: "flex-start",
    color: "white",
    "&:hover": {
      backgroundColor: "#606060",
    },
  }));

  return (
    <Box sx={{ margin: { md: "1.5rem 2rem", xs: "1rem" } }}>
      <MainHeadings>Selected filters :</MainHeadings>
      <Box sx={{
        height: "2vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
        {originTrue?.length > 0 && originTrue.map((el, i) => (
          <CustomButton
            variant="contained"
            key={i}
            onClick={() => handleState("origin", el)}
            endIcon={<ClearIcon />}
          >
            {el}
          </CustomButton>
        ))}
        {genderTrue?.length > 0 && genderTrue.map((el, i) => (
          <CustomButton
            variant="contained"
            key={i}
            onClick={() => handleState("gender", el)}
            endIcon={<ClearIcon />}
          >
            {el}
          </CustomButton>
        ))}
        {speciesTrue?.length > 0 && speciesTrue.map((el, i) => (
          <CustomButton
            variant="contained"
            key={i}
            onClick={() => handleState("species", el)}
            endIcon={<ClearIcon />}
          >
            {el}
          </CustomButton>
        ))}
      </Box>
    </Box>
  );
}
