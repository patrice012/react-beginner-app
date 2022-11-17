import React from "react";

const Book = ({ img, title, author, like, id, save, onClick, onSave }) => {
return (
    <article className="book">
        <div className="image__container">
        <img src={img} alt="" />
        </div>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <div>
        <p>Number of likes: {like} </p>
        <p>{save ? <span>save</span> : <span>Not save</span>}</p>
        </div>

        <div className="button">
        <button
            type="button"
            onClick={() => {
            onClick(id);
            }}
        >
            Like
        </button>
        <button type="button" onClick={() => onSave(id)}>
            {save ? "Not save " : "Save"}
        </button>
        </div>
    </article>
    );
};

export default Book;
