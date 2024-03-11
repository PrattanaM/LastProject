import React, { useState } from 'react';

const FileInputExample: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/png')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert('Please select a valid PNG file.');
    }
  };

  const containerStyle: React.CSSProperties = {
    width: '500px',
    height: '500px',
    backgroundSize: 'cover',
    backgroundImage: image ? `url(${image})` : 'none',
  };

  return (
    <>
      <input type="file" accept=".jpg, .jpeg" onChange={handleFileChange} />
    </>
  );
};

export default FileInputExample;
