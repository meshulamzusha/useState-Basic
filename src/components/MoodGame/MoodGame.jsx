import React, { useState } from "react";
import "./MoodGame.css";

function MoodGame() {
  const defaultMood = { moodType: "Neutral", emoji: "😐" };
  const moods = [
    { moodType: "Happy", emoji: "😊", count: 0 },
    { moodType: "Sad", emoji: "😓", count: 0 },
    { moodType: "Angry", emoji: "😡", count: 0 },
  ];
  const [mood, setMood] = useState(defaultMood);
  const [moodHistory, setHistory] = useState([]);
  const [counters, setCounters] = useState({ Happy: 0, Sad: 0, Angry: 0 });

  return (
    <main className="main-container">
      <section className="current-mood">
        {mood.moodType} {mood.emoji}
      </section>

      <section className="history-container">
        <p>Mood History</p>
        {moodHistory
          .slice(-4, -1)
          .reverse()
          .map((m) => (
            <p className="history">
              {m.moodType}
              {m.emoji}
            </p>
          ))}
      </section>

      <section className="counters-container">
        {Object.entries(counters).map((c) => (
          <div key={c[0]} className="counter">
            {c[0]} ({c[1]})
          </div>
        ))}
      </section>

      <div className="mood-btn-container">
        {moods.map((mood) => (
          <button
            key={mood.moodType}
            onClick={() => {
              setMood(mood);
              setCounters({
                ...counters,
                [mood.moodType]: counters[mood.moodType] + 1,
              });
              setHistory([...moodHistory, mood]);
            }}
          >
            {mood.moodType}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          setMood(defaultMood);
          setHistory([]);
          setCounters({ Happy: 0, Sad: 0, Angry: 0 });
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          const index = Math.floor(Math.random() * 3);
          setMood(moods[index]);
          setHistory([
            ...moodHistory,
            { ...moods[index], count: moods[index].count + 1 },
          ]);
          setCounters({
            ...counters,
            [moods[index].moodType]: counters[moods[index].moodType] + 1,
          });
        }}
      >
        Random Mood
      </button>
    </main>
  );
}

export default MoodGame;
