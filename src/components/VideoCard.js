import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  console.log(videoId, snippet);

  return (
    <Card sx={{ width : { md : "320px", xs : '100%'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          sx = {{ width: 358 , height:180}}
          image={snippet?.thumbnails?.high?.url}
          alt="green iguana"
        />
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </CardContent>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              {snippet?.channelTitle.slice(0, 60) ||
                demoVideoTitle.slice(0, 60)}
            </Typography>
          </CardContent>
        </Link>
      </Link>
    </Card>
  );
}

export default VideoCard;
