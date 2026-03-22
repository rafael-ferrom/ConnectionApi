import { Typography } from "@mui/material";
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
import { StyledBoxPage } from "../../style/StyledBoxPage";
import { StyledBoxPageTitle } from "../../style/StyledBoxPageTitle";
import { StyledBoxPageTable } from "../../style/StyledBoxPageTable";
import { StyledGridPage } from "../../style/StyledGridPage";

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
    <StyledBoxPage>
      <StyledBoxPageTitle>
        <Typography variant="h1">{specifyRequisition?.name}</Typography>
      </StyledBoxPageTitle>
      <StyledBoxPageTable>
        <TableInfos specifyRequisition={specifyRequisition} />
      </StyledBoxPageTable>
      <StyledGridPage
        container
        spacing={2}
      >
        <ContainerRequisitionGetAxios posts={posts} />
        <ContainerRequistionPostAxios
          handlePost={handlePost}
          postSubmited={postSubmited}
        />
        <ContainerRequisitionEditAxios handleUpdate={handleUpdate} />
        <ContainerRequisitionDeleteAxios handleDelete={handleDelete} />
      </StyledGridPage>
    </StyledBoxPage>
  );
};

export default AxiosPage;
