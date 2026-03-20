import { Box, Grid, Typography } from "@mui/material";
import { RowsTable } from "../../utils/Consts";
import { useEffect, useState } from "react";
import type { Post } from "../../models/Post";
import {
  deleteAxiosPost,
  getAxiosPost,
  postAxiosPost,
  putAxiosPost,
} from "../../services/axiosPosts";
import TableInfos from "../../components/TableInfos/TableInfos";
import ContainerRequisitionGetAxios from "../../components/ContainerRequisitionGetAxios/ContainerRequisitionGetAxios";
import ContainerRequistionPostAxios from "../../components/ContainerRequistionPostAxios/ContainerRequistionPostAxios";
import ContainerRequisitionEditAxios from "../../components/ContainerRequisitionEditAxios/ContainerRequisitionEditAxios";
import ContainerRequisitionDeleteAxios from "../../components/ContainerRequisitionDeleteAxios/ContainerRequisitionDeleteAxios";

const AxiosPage = () => {
  const specifyRequisition = RowsTable.find((opt) => opt.name === "Axios");
  const [posts, setPosts] = useState<Post[]>([]);
  const [postSubmited, setPostSubmited] = useState<boolean>(false);

  const mockPost: Post = {
    userId: 11,
    id: 201,
    title: "teste",
    body: "testeMock",
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await deleteAxiosPost(5);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await putAxiosPost(5, mockPost);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await postAxiosPost();
      setPostSubmited(true);
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  };

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getAxiosPost();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadPosts();
  }, []);

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
        <TableInfos specifyRequisition={specifyRequisition} />
      </Box>
      <Grid
        sx={{
          width: "80%",
          height: "40rem",
          marginBottom: "2rem",
          textAlign: "center",
          backgroundColor: "gray",
        }}
        container
        spacing={2}
      >
        <ContainerRequisitionGetAxios posts={posts} />
        <ContainerRequistionPostAxios
          handlePost={handlePost}
          postSubmited={postSubmited}
        />
        <ContainerRequisitionEditAxios handleUpdate={handleUpdate}/>
        <ContainerRequisitionDeleteAxios handleDelete={handleDelete}/>
      </Grid>
    </Box>
  );
};

export default AxiosPage;
