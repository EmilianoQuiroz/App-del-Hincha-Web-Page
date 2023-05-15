import { Button, Container, Typography } from "@mui/material";

export default function App(){
  return (
    <Container sx={{ border:4 }}>
      <h1>App</h1>
      {/** Componente Typography:
       * Le podemos pasar variantes con tamaños como h1, h2, h3 ...
       * Tambien le podemos pasar un estilo x pero hacer que se
       * renderice como otro estilo
       * Podemos agregar propiedades como el textAling
       */}
      <Typography 
      variant="h3"
      Container="h4"
      textAlign= "center"
      > Texto desde el componente Tipography</Typography>
      <Typography variant="h4"> Texto desde el componente Tipography</Typography>
      <Typography variant="h5"> Texto desde el componente Tipography</Typography>
      <Button variant = "contained">Material UI</Button>
    </Container>
  )
}