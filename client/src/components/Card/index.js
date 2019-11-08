import React from "react";
import "./style.css";

function Card(props) {
        return (
                <div className="container">
                    <div class="card-panel white">
                        <h3>{props.children}</h3>
                        <h4>{props.children}</h4>
                        <img 
                             
                        />
                    </div>
                </div>
        );
    
}

export default Card;