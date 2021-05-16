import React from "react";
import { NavLink } from "react-router-dom";
import web from "./img/pizza.jpg";
const Card = (props) => {
    return (
        <>
            
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                                        <p className="card-text">to order click below</p>
                                        <NavLink to="/contact" className="btn btn-primary">ORDER</NavLink>
                                    </div>
                                </div>
                            </div>
                   
        </>
    );
};
export default Card;