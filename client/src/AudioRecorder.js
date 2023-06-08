import React, { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'

const AudioRecorder = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition()
  const [listening, setListening] = useState(false)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (listening) {
      SpeechRecognition.startListening({ continuous: true })
      setTimer(
        setTimeout(() => {
          SpeechRecognition.stopListening()
          setListening(false)
        }, 10000)
      ) // 10 seconds
    } else {
      clearTimeout(timer)
    }
  }, [listening])

  const handleStartListening = () => {
    resetTranscript()
    setListening(true)
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleStartListening}>Start</button>
      <button
        onClick={() => {
          setListening(false)
        }}
      >
        Stop
      </button>
      <button onClick={resetTranscript}>Reset</button>
      {listening ? null : <p>{transcript}</p>}
    </div>
  )
}

export default AudioRecorder
