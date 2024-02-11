import React, { useState } from 'react';
import axios from 'axios';

const FolderUploader = () => {
  const [chapterNumber, setChapterNumber] = useState('');
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUploadFolder = async () => {
    try {
      const formData = new FormData();
      formData.append('Chapter', chapterNumber);

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('files', selectedFiles[i]);
      }

      console.log(formData);
      // Make a POST request to the server to upload the files
      await axios.post('http://localhost:3003/uploadFiles', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Optionally, you can handle the response or update UI accordingly
    } catch (error) {
      console.error('Error uploading folder:', error);
    }
  };

  return (
    <div>
      <label>
        Chapter Number:
        <input type="text" value={chapterNumber} onChange={(e) => setChapterNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Select Files:
        <input type="file" multiple onChange={handleFileChange} />
      </label>
      <br />
      <button onClick={handleUploadFolder}>Upload Folder</button>
    </div>
  );
};

export default FolderUploader;
