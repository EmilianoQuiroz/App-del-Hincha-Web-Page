import { Box, Button, Container, Typography } from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function App(){
  return (
    <Container>
      {/** Componente Box:
       * Podremos agregar estilos dentro del componente
      */}
      <Box sx={{ border:4, p:5 }}> Texto desde el componente Box</Box>
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
      
      <Button
      variant="outlined"
      startIcon={<AddLocationIcon />}
      >
        Boton Con icono
      </Button>

      <Button
      variant="contained"
      color="error"
      endIcon={<AddLocationIcon />}
      >
        Boton Con icono
      </Button>
    </Container>
  )
}