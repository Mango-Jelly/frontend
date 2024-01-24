'use client'
import React, { useRef, useEffect } from 'react';



type Props = {
    streamManager : any
}

export default function OpenViduVideoComponent({ streamManager } : Props) {
    const videoRef = useRef();

    useEffect(() => {
        if (streamManager && videoRef.current) {
            streamManager.addVideoElement(videoRef.current);
        }
    }, [streamManager]);

    return <video autoPlay={true} ref = {videoRef} />;
}