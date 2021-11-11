import React from "react";

const ListItem = ({id, name, image, type}) => {
    return (
        <div>
            <div>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default ListItem