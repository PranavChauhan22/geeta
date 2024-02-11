import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const ChapterCarousel = ({ chapters }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div className='key_cc'>
        {Object.keys(chapters).map((chapter) => (
          <button key={chapter} onClick={() => handleChapterClick(chapter)} className="key_btn">
            {chapter}
          </button>
        ))}
      </div>

      {selectedChapter && (
        <div className='cc_t'>
          <div className="flex-container">
            {chapters[selectedChapter].map(({ audioUrl, fileName }, index) => (
              <div key={index} className="flex-item">
                <p className='cc_hh'>{fileName}</p>
                <audio src={audioUrl} controls className='cc_audio'></audio>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterCarousel;
