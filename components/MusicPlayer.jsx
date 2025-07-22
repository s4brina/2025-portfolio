import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fadeInterval = useRef(null);

  const fadeAudio = (targetVolume, callback) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    clearInterval(fadeInterval.current);
    const step = 0.05;
    fadeInterval.current = setInterval(() => {
      const currentVolume = audio.volume;
      if (targetVolume > currentVolume) {
        const newVolume = Math.min(currentVolume + step, targetVolume);
        audio.volume = newVolume;
        if (newVolume === targetVolume) {
          clearInterval(fadeInterval.current);
          callback?.();
        }
      } else {
        const newVolume = Math.max(currentVolume - step, targetVolume);
        audio.volume = newVolume;
        if (newVolume === targetVolume) {
          clearInterval(fadeInterval.current);
          callback?.();
        }
      }
    }, 50);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setIsPlaying((prev) => !prev);

    if (isPlaying) {
      fadeAudio(0, () => {
        audio.pause();
      });
    } else {
      audio.volume = 0;
      audio.play().then(() => {
        fadeAudio(1);
      }).catch((err) => {
        console.error("Failed to play audio:", err);
      });
    }
  };

  return (
    <div className="flex items-center gap-2 text-white">
      <audio ref={audioRef} src="/synth.mp3" loop preload="auto" />
      <button onClick={togglePlay}>
        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
      </button>
      <span className="text-sm">Music</span>
    </div>
  );
};

export default MusicPlayer;
