import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import ChannelCard from './ChannelCard';

function Videos({ videos }) {
  useEffect(() => {
    console.log("videos :", videos);
  }, [videos]);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
          </Box>
      ))}
    </Stack>
  );
}

export default Videos;
