import React from "react";
import { Card, Id, Infos, Image, Target } from "./styles";

const ListItem = ({id, name, image, type}) => {
    return (
        <Card>
            <Target>
                <Id>#0{id}</Id>
                <Image src={image} alt={name} />
            </Target>    
            
            <div>
                <h3>{name}</h3>
                <Infos>Type: {type}</Infos>
            </div>
        </Card>
    )
}

export default ListItem