import { useState } from "react";

const ImageHandler = ({ onImageChange }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/png")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        onImageChange(reader.result);
      };      
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select a valid PNG file.");
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onImageChange(null);
  };

  return (
    <div>
      <div>
        <input type="file" accept=".png" onChange={handleFileChange} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleRemoveImage}>Remove</button>
      </div>
    </div>
  );
};

export default ImageHandler;
