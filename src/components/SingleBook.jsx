import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

// ** codice precedente alla nuova implementazione: **
// state = {
//   selected: false
// };

const SingleBook = props => {
  return (
    <>
      <Card
        // al click della card si chiama la funzione che cambierà lo stato al livello superiore (BookList) con il valore di ASIN del suo libro (this.props.book.asin)
        onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
        // ** codice precedente alla nuova implementazione: **
        // onClick={() => this.setState({ selected: !this.state.selected })}
        // style={{ border: this.state.selected ? "3px solid red" : "none" }}

        // se e solo se questa card ha lo stesso asin del selectedBook dello stato superiore (passato qui dentro come this.props.selectedBook)
        // allora si colora il bordo di rosso, altrimenti sarà grigio
        // in questo modo UNA SOLA card alla volta avrà il bordo rosso
        style={{ border: this.props.selectedBook === this.props.book.asin ? "3px solid red" : "3px solid #ebebeb" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/*** codice precedente alla nuova implementazione: ***/}
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
