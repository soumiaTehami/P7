import React from "react";

const Card = () => {
  return (
    <li className="card-container">
      <div className="card-left">
        <img src="" alt="poster-pic" />
      </div>
      <div className="card-right">
        <div className="card-header">
          <div className="pseudo"></div>
        </div>

        <div className="update-post">
          <textarea />
          <div className="icon">
            <img src="./img/icons/picture.svg" alt="img" />
            <input
              type="file"
              id="file-upload"
              name="file"
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <div className="button-container">
            <button className="btn">Valider modification</button>
          </div>
        </div>

        <img src="" alt="card-pic" className="card-pic" />
      </div>

      <img src="./img/icons/edit.svg" alt="edit" />

      <div className="card-footer">
        <div className="comment-icon">
          <img src="./img/icons/message1.svg" alt="comment" />
        </div>
      </div>
    </li>
  );
};

export default Card;
