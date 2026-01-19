import {
  Avatar,
  Box,
  Button,
  Checkbox,
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

interface ColumnItem {
  id:number
  label:string
}

interface RownItem{
  id:number
  name:string
  hasExternalLib: boolean
  hasAutomaticCache: boolean
  hasLoading: boolean
  goodForBigProjects:boolean
  bigLearningCourve: boolean
}


const Home = () => {

  const ColumnTable: ColumnItem[] = [
    {id:1, label:""},
    {id:2, label:"Biblioteca externa"},
    {id:3, label:"Cache automatico"},
    {id:4, label:"Gerenciamento de loading automatico"},
    {id:5, label:"Ideal para projetos grandes"},
    {id:6, label:"Curva de aprendizado alto"}
  ]

  const RowsTable: RownItem[] = [
    {id:1, name:"Fetch",hasExternalLib:false,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:false, bigLearningCourve:false},
    {id:2, name:"Axios",hasExternalLib:true,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:false, bigLearningCourve:false},
    {id:1, name:"CreateAsyncThunk",hasExternalLib:true,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:true, bigLearningCourve:true},
    {id:1, name:"RTK",hasExternalLib:true,hasAutomaticCache:true,hasLoading:true,goodForBigProjects:true, bigLearningCourve:true}
  ]

  console.log(RowsTable);
  
  
  const navigate = useNavigate()

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
          Requisition App
        </Typography>
        <Typography variant="h5" color="white" sx={{marginTop:"1rem"}}>
          Essa aplicação busca mostrar formas de como consumir uma API e suas vantagens e desvantagens
        </Typography>
        <Button onClick={() => navigate("/More")} sx={{ color: "white", backgroundColor: "orange", marginTop:"2rem"}}>
          Learn more
        </Button>
      </Box>
      <Box>
        <List
          sx={{
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
                <Link underline="hover" sx={{color:"black"}} href="/Fetch">Fetch</Link>
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
                <Link underline="hover" sx={{color:"black"}} href="/Axios">Axios</Link>
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
                <Link underline="hover" sx={{color:"black"}} href="/Thunk">CreateAsyncThunk</Link>
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
                <Link underline="hover" sx={{color:"black"}} href="/RTK">RTK Query</Link>
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
                {ColumnTable.map((column) =>(
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              
                {RowsTable.map((row) =>(
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.hasExternalLib ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox> }</TableCell>
                    <TableCell>{row.hasAutomaticCache ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                    <TableCell>{row.hasLoading ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                    <TableCell>{row.goodForBigProjects ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                    <TableCell>{row.bigLearningCourve ? <Checkbox disabled checked></Checkbox>: <Checkbox disabled></Checkbox>}</TableCell>
                  </TableRow>
                ))}
              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Home;
