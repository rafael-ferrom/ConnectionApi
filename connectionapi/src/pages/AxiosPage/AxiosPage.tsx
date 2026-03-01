import { Box, Button, Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { ColumnTable, RowsTable } from "../../utils/Consts";
import { useEffect, useState } from "react";
import type { Post } from "../../models/Post";
import { deleteAxiosPost, getAxiosPost, postAxiosPost, putAxiosPost } from "../../services/axiosPosts";

const AxiosPage = () => {
  const specifyRequisition = RowsTable.find((opt) => opt.name === "Axios");
  const [posts, setPosts] = useState<Post[]>([])
  const [postSubmited, setPostSubmited] = useState<boolean>(false)

  const mockPost:Post = {
    userId: 11,
    id: 201,
    title: "teste",
    body: "testeMock",
  }

  const handleDelete = async(e: React.FormEvent)  => {
    e.preventDefault()

    try{
      await deleteAxiosPost(5)
    }
    catch(err){
      console.error(err)
      throw err
    }
  }

  const handleUpdate = async(e: React.FormEvent) => {
    e.preventDefault()

    try{
      await putAxiosPost(5, mockPost)
    }
    catch(err){
      console.error(err)
      throw err
    }
  }

  const handlePost = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    await postAxiosPost();
    setPostSubmited(true);
  } catch (err) {
    console.error("Erro na requisição:", err);
  }
}

  
  useEffect(() => {
    async function loadPosts(){
      try{
        const data = await getAxiosPost()
        setPosts(data)
      }
      catch(err){
        console.error(err)
      }
    }
    loadPosts()
  },[])

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          backgroundColor: "green",
          width: "40%",
          height: "8rem",
          margin: "2rem",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography variant="h1">{specifyRequisition?.name}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "blue",
          width: "80%",
          height: "8rem",
          margin: "2rem",
        }}
      >
        <TableContainer sx={{ border: "2px solid red" }}>
          <Table>
            <TableHead>
              <TableRow>
                {ColumnTable.map((col) => (
                  <TableCell key={col.id}>{col.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={specifyRequisition?.id}>
                <TableCell>{specifyRequisition?.name}</TableCell>
                <TableCell>
                  {specifyRequisition?.hasExternalLib ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.hasAutomaticCache ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.hasLoading ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.goodForBigProjects ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
                <TableCell>
                  {specifyRequisition?.bigLearningCourve ? (
                    <Checkbox disabled checked></Checkbox>
                  ) : (
                    <Checkbox disabled></Checkbox>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Grid sx={{ width: "80%", height: "40rem", marginBottom:"2rem",textAlign:"center", backgroundColor:"gray"  }} container spacing={2}>
        <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">GET</Typography>
          {posts?.slice(0, 15).map((post) => (
            <Typography>{post.title}</Typography>
          ))}
          <Button sx={{backgroundColor:"blue", alignItems:"end", width:"10rem", }}>Get</Button>
        </Grid>
       <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">Post</Typography>
          <Box component="form" onSubmit={handlePost} sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ margin: "1rem", textAlign: "center" }}>
              <Typography>Aqui temos um user mockado que sera enviado</Typography>
              <Button 
                type="submit"
                variant="contained"
                sx={{ width: "80%", height: "4rem", backgroundColor: "yellow", margin: "1rem" }} 
              >Submit</Button>
              {postSubmited ? <Typography>Verifique o console</Typography> : <></>}
            </Box>
          </Box>
        </Grid>
        <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">PUT</Typography>
          <Box component="form" onSubmit={handleUpdate} sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Aqui temos um user mockado que sera enviado</Typography>
              <Button sx={{ backgroundColor: "blue", width: "10rem" }} type="submit">Put</Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">Delete</Typography>
          <Box component="form" onSubmit={handleDelete} sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Aqui temos um user mockado que sera enviado</Typography>
              <Button type="submit" sx={{ backgroundColor: "blue", width: "10rem" }}>Delete</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AxiosPage
