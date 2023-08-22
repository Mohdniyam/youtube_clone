import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Api";
import { NewReleasesRounded } from "@mui/icons-material";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      // console.log("data: ",  data)
      return setVideos(data?.items);
    });
  }, [selectedCategory]);
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, marginTop: "4.9rem" }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          // flexDirection : { sx: "auto", md: "column"},
          // width: { sx: "auto", md: "15vw" },
          borderRight: "1px solid #3d3d3d",
          // pt: 10,
          px: { sx: 2, md: 2 },
        
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 10, border: "2x solid red", color: "#fff" }}
        >
          copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: "auto",
          flex: 2,
          height: { sx: "auto", md: "92vh" },
          // width: { sx: "auto", md: "85vw" },
          // pt: 10,
          px: { sx: 0, md: 2 },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
