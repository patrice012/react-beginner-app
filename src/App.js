import { useState } from "react";
import "./book.css";
// import { data } from "./components/books";
import SpecificBook from "./components/book";


function App() {
  const [book, setBook] = useState(
    [
      {
        id: 1,
        img: "img/dome.jpg",
        title: "I Love You to the Moon and Back",
        author: "Amelia Hepworth",
        like: 0,
        save:false,
      },
      {
        id: 2,
        img: "img/tasse.jpg",
        title: "Our Class is a Family",
        author: "Shannon Olsen",
        like: 0,
        save:false,
      },
      {
        id: 3,
        img: "img/clothes.jpg",
        title: "The Vanishing Half: A Novel",
        author: "Brit Bennett",
        like: 0,
        save:false,
      },
    ]
  )


  const clickHandler = (id) => {
    setBook((prevBook) => {
      prevBook.forEach(item => {
        if (item.id === id) {
          item.like += 1
        }
      });
      return [...prevBook]})
  };

  const saveHandler = (id) => {
    setBook((prevBook) => {
      prevBook.forEach((item) => {
        if (item.id === id) {
          item.save = !item.save;
        }
      });
      return [...prevBook];
    });
  }

  


  return (
    <section className="booklist">
      {book.map((book, index) => {
        return (
            <SpecificBook
              key={book.id}
              onClick={clickHandler}
              onSave={saveHandler}
              {...book}
            ></SpecificBook>
        );
      })}
    </section>
  );
}

export default App;
