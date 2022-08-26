import React, { useState } from "react";

const NewPostForm = () => {
  const [isLoading] = useState(true);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <h2> la logique</h2>
      )}
    </div>
  );
};

export default NewPostForm;
