import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
  if (comments != null) {
    const listOfComments = comments.map((commentx) => {
      return (
        <li key={commentx.id}>
          --{commentx.comment}
          <br /> {commentx.author}, {new Date(commentx.date).toDateString()}
          <br />
          <br />
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{listOfComments}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card className="col-12 col-md-5 m-1">
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <b>{dish.name}</b>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
