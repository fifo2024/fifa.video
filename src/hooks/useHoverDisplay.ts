import pLimit from "p-limit";
import { useCallback, useEffect, useState } from "react";

const useHoverDisplay = (url: string) => {
    const [queue, setQueue] = useState<Promise<unknown>[]>();
    const limit = pLimit(1);

    const onMouseOver = useCallback(
        (videoElement) => {
            if (!videoElement) return;

            setQueue((prevQueue) => {
                return [
                    ...(prevQueue || []),
                    limit(() => {
                        return new Promise((resolve) => {
                            videoElement.src = url;
                            videoElement.addEventListener("canplay", () => {
                                if (videoElement && videoElement.paused) {
                                    videoElement
                                        .play()
                                        .then(resolve)
                                        .catch((e) => {
                                            console.error(e);
                                            resolve("");
                                        });
                                }
                            });
                        });
                    }),
                ];
            });
        },
        [limit, url]
    );

    const onMouseLeave = useCallback(
        (videoElement) => {
            setQueue(() => {
                return [
                    limit(() => {
                        return new Promise(() => {
                            videoElement.pause();
                            videoElement.src = "";
                            videoElement.removeAttribute("src");
                            videoElement.load();
                        });
                    }),
                ];
            });
        },
        [limit]
    );

    useEffect(() => {
        async function func() {
            if (!queue?.length) return;

            await Promise.all(queue).then(() => {
                console.log("all done");
                setQueue([]);
            });
        }

        func();
    }, [queue]);

    return [onMouseOver, onMouseLeave];
};

export default useHoverDisplay;
