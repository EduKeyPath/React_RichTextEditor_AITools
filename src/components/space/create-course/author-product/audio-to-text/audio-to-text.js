import React, {useState, useEffect} from "react";
import { useWhisper } from '@chengsokdara/use-whisper'
// import './image-to-text.css';

export default function AudioToText(){ 
    const {
        recording,
        speaking,
        transcribing,
        transcript,
        pauseRecording,
        startRecording,
        stopRecording,
      } = useWhisper({
        apiKey: ' ', // YOUR_OPEN_AI_TOKEN
    })
    

    return(
        <>
            <p>Recording: {recording}</p>
            <p>Speaking: {speaking}</p>
            <p>Transcribing: {transcribing}</p>
            <p>Transcribed Text: {transcript.text}</p>
            <button onClick={() => startRecording()}>Start</button>
            <button onClick={() => pauseRecording()}>Pause</button>
            <button onClick={() => stopRecording()}>Stop</button>
        </>
    )
}