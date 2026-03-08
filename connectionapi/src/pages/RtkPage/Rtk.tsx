import { Box, Button, Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { ColumnTable, RowsTable } from "../../utils/Consts";
import { useCreateCommentMutation, useDeleteCommentMutation, useEditCommentMutation, useGetCommentsQuery } from "../../services/rtkComments";
import type { Comment } from "../../models/Comment";

const Rtk = () => {
  const specifyRequisition = RowsTable.find((opt) => opt.name === "RTK");
  const {data} = useGetCommentsQuery()
  const [createComment ] = useCreateCommentMutation()
  const [editComment] = useEditCommentMutation()
  const [deleteComponent] = useDeleteCommentMutation()

  const mockComment: Comment = {
    postId: 10,
    id:201,
    name:"irineu",
    email:"irineu@gmail.com",
    body:"testeee"
  }

const editCommentVar: Comment = {
  postId:1,
  id: 5,
  name: "Rafa",
  email: "rafa@email.com",
  body: "Comentário atualizado"
}

  const handleCreate = async() => {
    try{
      await createComment(mockComment)
    }
    catch(err){
      console.log(err);
      
    }
  }

  const handleEdit = async() => {
    try{
      await editComment(editCommentVar)
    }
    catch(err){
      console.log(err);
      
    }
  }

  const handleDelete = async() => {
    try{
      await deleteComponent(5)
    } 
    catch(err){
      console.log(err);
      
    }
  }
  
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
          <Typography variant="h4">Get</Typography>
          {data?.slice(0,7).map((c) => (
            <Box key={c.id}>
              <Typography>{c.name}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">Post</Typography>
          <Button onClick={handleCreate} sx={{backgroundColor:"blue", alignItems:"end", width:"10rem"}}>Post</Button>
        </Grid>
        <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">Put</Typography>
          <Button onClick={handleEdit} sx={{backgroundColor:"blue", alignItems:"end", width:"10rem"}}>Put</Button>
        </Grid>
        <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>
          <Typography variant="h4">Delete</Typography>
          <Button onClick={handleDelete} sx={{backgroundColor:"blue", alignItems:"end", width:"10rem"}}>Delete</Button>
        </Grid>
      </Grid>
      </Box>
    );
}

export default Rtk
