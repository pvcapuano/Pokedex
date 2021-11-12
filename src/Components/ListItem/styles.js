import styled from 'styled-components'
import { poketype } from "../../helpers/poketype"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 10px;
    width: 200px;
    border-radius: 20px;
    box-shadow: 4px 2px 2px black;
    background-color: ${props => poketype(props.background)};
    margin: 20px;
    border: ${props => props.pokeball ? "10px solid green" : ""};
`


export const Target = styled.div`
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    padding: 30px;
    height: 150px;
    width: 150px;
`
export const Infos = styled.span`
display: flex;
flex-direction: column;
font-size: 18px;
font-family: Roboto;
margin: 10px;


`