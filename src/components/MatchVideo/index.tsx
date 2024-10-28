import { FC, useRef } from "react";
import { useHoverDisplay } from "src/hooks";

export interface MatchVideoProps {
    videoUrl: string;
    nextUrl: string;
    poster: string;
}

const MatchVideo: FC<MatchVideoProps> = ({ videoUrl, nextUrl, poster }) => {
    const [onMouseOver, onMouseLeave] = useHoverDisplay(videoUrl);

    return (
        <div style={{ margin: "8px" }}>
            <video
                className="video-js"
                controls
                preload="auto"
                width="470"
                height="264"
                poster={poster}
                onMouseOver={(e) => onMouseOver(e.target)}
                onMouseLeave={(e) => onMouseLeave(e.target)}
            >
                {/* <source src={url} type="video/mp4" /> */}
            </video>
            {/* <ReactPlayer
                url={videoUrl}
                ref={playerRef}
                width="320px"
                height="240px"
                onMouseOver={(e: MouseEvent) => {
                    console.log(21, playerRef.current);
                    onMouseOver(playerRef.current);
                }}
                onMouseLeave={(e: MouseEvent) => onMouseLeave(e.target)}
            /> */}
        </div>
    );
};

export default MatchVideo;
