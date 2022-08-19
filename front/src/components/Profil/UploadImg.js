import React from "react";

const UploadImg = () => {
  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;
