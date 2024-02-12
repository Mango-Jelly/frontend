"use client";

import { useState } from "react";

import Image from "next/image";
import VideoIcon from "@/../public/VideoIcon.svg";
import VideoOffIcon from "@/../public/VideoOffIcon.svg";
import MicIcon from "@/../public/MicIcon.svg";
import MicOffIcon from "@/../public/MicOffIcon.svg";

export default function HostVideo() {
  const controlButtonClass = "rounded-[2rem] bg-main px-6 py-2 m-1 hover:bg-maindark";

  const [isCameraOn, setCameraOn] = useState(true);
  const [isAudioOn, setAudioOn] = useState(true);

  const toggleCamera = () => {
    setCameraOn((prev) => !prev);
  };

  const toggleAudio = () => {
    setAudioOn((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-1 gap-2 content-center">
      <div className="bg-gray-200 rounded-2xl w-[60rem] h-[36rem]"></div>
      <div className="flex justify-between">
        <div>
          <button onClick={toggleCamera} className={controlButtonClass}>
            {isCameraOn ? (
              <Image src={VideoIcon} width={32} height={32} alt="카메라 끄기" />
            ) : (
              <Image src={VideoOffIcon} width={32} height={32} alt="카메라 켜기" />
            )}
          </button>
          <button onClick={toggleAudio} className={controlButtonClass}>
            {isAudioOn ? (
              <Image src={MicIcon} width={32} height={32} alt="마이크 끄기" />
            ) : (
              <Image src={MicOffIcon} width={32} height={32} alt="마이크 켜기" />
            )}
          </button>
        </div>
        <div>
          <button className="rounded-[2rem] bg-highlight/90 px-6 py-4 m-1 hover:bg-highlight">
            <p className="text-white text-3xl">시작하기</p>
          </button>
          <button className="rounded-[2rem] bg-highlight/90 px-6 py-4 m-1 hover:bg-highlight">
            <p className="text-white text-3xl">종료하기</p>
          </button>
        </div>
      </div>
    </div>
  );
}
