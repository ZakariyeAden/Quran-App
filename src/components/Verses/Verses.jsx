import { Link } from "react-router-dom";
// HOOKS
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// React sound
import Sound from "react-sound";
// CSS
import "./Verses.css";
const Verses = ({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) => {
  // HOOKS
  const { chapterId } = useParams();
  const chapter = useSelector(state => state.chapterItem);
  const ayahs = useSelector(state => state.verses);
  const audios = useSelector(state => state.playAudio);
  const [playAudio, setPlayAudio] = useState(false);
  const dispatch = useDispatch();

  // Indiviual Chapter item, Verses, and Audio
  useEffect(() => {
    dispatch({ type: "FETCH_CHAPTER_ITEM", payload: chapterId });
    dispatch({ type: "FETCH_VERSES", payload: chapterId });
    dispatch({ type: "FETCH_AUDIO", payload: chapterId });
  }, []);

  return (
    <div className="verse-section">
      <Link to="/chapters" className="verse-link">
        <span className="arrow-icon">
          <ion-icon name="arrow-back-outline" size="medium"></ion-icon>
        </span>
        Go Back to Selections
      </Link>
      <div className="d-flex">
        {chapter.map((chapter, key) => {
          return (
            <h2 key={key}>
              Chapter:<span className="chapter-name">{chapter.name}</span>
            </h2>
          );
        })}
        {/* Controll Buttons to Play Audio */}
        <div onClick={() => setPlayAudio(!playAudio)}>
          {!playAudio ? (
            <span className="control-icon">
              <ion-icon name="play" size="large"></ion-icon>
              Play
            </span>
          ) : (
            <span className="control-icon">
              <ion-icon name="pause" size="large"></ion-icon>
              Stop
            </span>
          )}
        </div>
        <div>
          {/* Play Audio for Client */}
          <Sound
            url={audios.audio_url}
            playStatus={playAudio ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300 /* in milliseconds */}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
          />
        </div>
      </div>
      {/* Verses: Map the Verses and display for Client */}
      {ayahs.map((verse, key) => {
        return (
          <p className="ayahs-text" key={key}>
            {verse?.text}
          </p>
        );
      })}
    </div>
  );
};

export default Verses;
