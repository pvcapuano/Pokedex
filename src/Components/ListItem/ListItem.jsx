import React from "react";
import { Card, Infos, Image, Target, CardDetail } from "./styles";

const ListItem = ({id, name, image, type, pokeball}) => {
    console.log(type)

    
    

    return (
        <Card background={type} pokeball={pokeball.includes(name)}>
            <Target>
                <Image src={image} alt={name} />
            </Target>    
            
            <CardDetail>
                <Infos>#0{id}</Infos>
                <Infos>{name}</Infos>
                <Infos>{type}</Infos>
            </CardDetail>
        </Card>
    )
}

export default ListItem