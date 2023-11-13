"use client";

import YouTube from "react-youtube";

interface VideoProps {
  videoId?: string;
  image?: string;
}

const Video = ({ videoId, image }: VideoProps) => {
  if (!videoId && !image) return <></>;
  if (videoId)
    return (
      <div className="video-responsive-wrapper pt-[56.25%] lg:pt-[540px] shadow-lg">
        <YouTube
          videoId={videoId}
          opts={{ playerVars: { autoplay: 1, loop: 1, playlist: videoId } }}
        />
      </div>
    );
  else
    return (
      <img
        src={image}
        alt={`Header Image`}
        className="rounded object-cover aspect-video shadow-lg"
      />
    );
};

export default Video;
