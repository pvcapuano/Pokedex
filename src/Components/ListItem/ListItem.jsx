import React, { useState } from "react";
import { Card, Infos, Image, Target } from "./styles";

const ListItem = ({id, name, image, type, pokeball}) => {
    console.log(type)

    
    

    return (
        <Card background={type} pokeball={pokeball.includes(name)}>
            <Target>
                <Image src={image} alt={name} />
            </Target>    
            
            <div>
                <Infos>#0{id}</Infos>
                <Infos>{name}</Infos>
                <Infos>{type}</Infos>
            </div>
        </Card>
    )
}

export default ListItem