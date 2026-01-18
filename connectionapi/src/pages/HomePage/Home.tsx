import {
  Avatar,
  Box,
  Button,
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

const Home = () => {
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
                src="/assets/img1"
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary="Título do item"
              secondary="Descrição ou texto complementar"
            />
          </ListItem>

          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src="/imagem-exemplo.png"
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary="Título do item"
              secondary="Descrição ou texto complementar"
            />
          </ListItem>

          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src="/imagem-exemplo.png"
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary="Título do item"
              secondary="Descrição ou texto complementar"
            />
          </ListItem>

          <ListItem sx={{display:"flex",flexDirection:"column" }}>
            <ListItemAvatar>
              <Avatar
                src="/imagem-exemplo.png"
                alt="Imagem"
              />
            </ListItemAvatar>

            <ListItemText sx={{textAlign:"center"}}
              primary="Título do item"
              secondary="Descrição ou texto complementar"
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
