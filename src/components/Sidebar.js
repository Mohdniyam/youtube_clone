import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction = "row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column"},
      // justifyContent : { sx: "center"}
    
    }}
  >
    {categories.map((category, i) => (
      <button onClick={()=> setSelectedCategory(category.name) } className="category-btn" style={{ background : category.name === selectedCategory && '#fc1503', color:"#fff"}} key={i}>
        <span style={{color:category.name === selectedCategory ? "#fff" : "red", marginRight:"15px"}}>{category.icon}</span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
