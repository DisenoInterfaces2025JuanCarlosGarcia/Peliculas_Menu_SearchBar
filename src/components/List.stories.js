import List from "./List";

export default {
  title: "Components/List",
  component: List,
  
  //tags: ["autodocs"],
 
};


export const Default ={
args: {
   
  nombre: "Gerard Butler",
  esNota10: false,
  
  children: "Gerard Butler es un actor escocés que interpreta al rey Leónidas de Esparta en '300'.",
  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gerard_Butler_%2829681162176%29.jpg/330px-Gerard_Butler_%2829681162176%29.jpg"
}
};

export const Destacado = {
args : {
  
  nombre: "Lena Headey",
  esNota10: true,
  children: "Esta actriz participa en la película 300.",
  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lena_Headey_%2847086135862%29_%28cropped%29.jpg/330px-Lena_Headey_%2847086135862%29_%28cropped%29.jpg"
}
};

export const SinDescripcion = {
args : {
  
  nombre: "Intérprete sin descripción",
  esNota10: false,
  children: "",
  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jodie_Foster-8667.jpg/500px-Jodie_Foster-8667.jpg"
}
};

export const Silvia = {
  args: {
    
    nombre: "Silvia Cachon",
    esNota10: true,
    children: "Gerard Butler es un actor escocés que interpreta al rey Leónidas de Esparta en '300'.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gerard_Butler_%2829681162176%29.jpg/330px-Gerard_Butler_%2829681162176%29.jpg"
  }
};