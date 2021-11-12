export const poketype = (type) => {

    const types = {
        rock: "rgb(148, 81, 81)",
        ghost: "rgb(247, 247, 247)",
        electric: "rgb(255, 255, 161)",
        bug: "#F6D6A7",
        poison: "#e0a7f6",
        normal: "#F4F4F4",
        fairy: "rgba(255, 192, 203, 0.863)", 
        fire: "#FBE3DF",
        grass: "#E2F9E1", 
        water: "#E0F1FD",
    }
    
    return types[type]  
}