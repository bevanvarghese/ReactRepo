import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    //renders anyway in the list
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name}/>
                  <CardImgOverlay>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        //renderDish()'s prettifier
        return (
            <div className="row">
                {menu}
            </div>
        );
    }
}

export default Menu;
