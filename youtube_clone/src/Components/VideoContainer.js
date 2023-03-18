import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    // console.log(jsonData);
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap">
      {/* {console.log(videos)} */}
      {videos[0] && (
        <Link to={`/watch?v=${videos[0].id}`}>
          <AdVideoCard info={videos[0]} />
        </Link>
      )}
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
