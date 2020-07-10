import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    if(comments!=null) {
      const listOfComments = comments.map((commentx) => {
          return (
            <li key={commentx.id}>
              --{commentx.comment}<br/> {commentx.author}, {new Date(commentx.date).toDateString()}
              <br/><br/>
            </li>

          );
        });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {listOfComments}
          </ul>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    var dish = this.props.dish;
    if(dish!=null) {
      return (
          <div className="container">
          <div className="row">
            <Card className="col-12 col-md-5 m-1">
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle><b>{dish.name}</b></CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            {this.renderComments(dish.comments)}
          </div>
          </div>
        );
      } else {
        return (<div></div>);
      }
    }
}

export default DishDetail;
