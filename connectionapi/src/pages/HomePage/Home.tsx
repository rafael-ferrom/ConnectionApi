import {
  Avatar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import img from "../../assets/img.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  
  const navigate = useNavigate()
  console.log(navigate);

  return (
    <Box>
      <Box
        sx={{
          minHeight: "60vh",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          height: "16rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" color="white">
          HOME
        </Typography>
        <Typography variant="h5" color="white">
          Subtitle
        </Typography>
        <Button sx={{ color: "white", backgroundColor: "orange" }}>
          Learn more
        </Button>
      </Box>
      <Box>
        <List
          sx={{
            backgroundColor: "green",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src={img1}
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary={
                <Link sx={{color:"black"}} href="/Fetch">Fetch</Link>
              }
              secondary="Consumir a API com Javascript puro"
            />
          </ListItem>

          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src={img2}
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary={
                <Link sx={{color:"black"}} href="/Axios">Axios</Link>
              }
              secondary="Lib para ajudar a consumir API"
            />
          </ListItem>

          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src={img3}
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary={
                <Link sx={{color:"black"}} href="/Thunk">CreateAsyncThunk</Link>
              }
              secondary="Funcionalidade do Redux toolkit"
            />
          </ListItem>

          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src={img4}
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary={
                <Link sx={{color:"black"}} href="/RTK">RTK Query</Link>
              }
              secondary="Funcionalidade do Redux toolkit"
            />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography sx={{marginBottom:"3rem", textAlign:"center"}} variant="h3">Vantagens e desvantagens</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
                <TableCell>d</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Home;
