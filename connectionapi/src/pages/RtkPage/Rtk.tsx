import {Typography } from "@mui/material";
import { RowsTable } from "../../utils/Consts";
import {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useGetCommentsQuery,
} from "../../services/rtkComments";
import type { Comment } from "../../models/Comment";
import TableInfos from "../../components/TableInfos/TableInfos";
import ContainerRequisitionFetchRtk from "../../components/ContainerRequisitionFetchRtk/ContainerRequisitionFetchRtk";
import ContainerRequisitionPostRtk from "../../components/ContainerRequisitionPostRtk/ContainerRequisitionPostRtk";
import ContainerRequisitionEditRtk from "../../components/ContainerRequisitionEditRtk/ContainerRequisitionEditRtk";
import ContainerRequisitionDeleteRtk from "../../components/ContainerRequisitionDeleteRtk/ContainerRequisitionDeleteRtk";
import { StyledBoxPage } from "../../style/StyledBoxPage";
import { StyledBoxPageTitle } from "../../style/StyledBoxPageTitle";
import { StyledBoxPageTable } from "../../style/StyledBoxPageTable";
import { StyledGridPage } from "../../style/StyledGridPage";

const Rtk = () => {
  const specifyRequisition = RowsTable.find((opt) => opt.name === "RTK");
  const { data } = useGetCommentsQuery();
  const [createComment] = useCreateCommentMutation();
  const [editComment] = useEditCommentMutation();
  const [deleteComponent] = useDeleteCommentMutation();

  const mockComment: Comment = {
    postId: 10,
    id: 201,
    name: "irineu",
    email: "irineu@gmail.com",
    body: "testeee",
  };

  const editCommentVar: Comment = {
    postId: 1,
    id: 5,
    name: "Rafa",
    email: "rafa@email.com",
    body: "Comentário atualizado",
  };

  const handleCreate = async () => {
    try {
      await createComment(mockComment);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    try {
      await editComment(editCommentVar);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteComponent(5);
    } catch (err) {
      console.log(err);
    }
  };

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
        <ContainerRequisitionFetchRtk data={data} />
        <ContainerRequisitionPostRtk handleCreate={handleCreate} />
        <ContainerRequisitionEditRtk handleEdit={handleEdit} />
        <ContainerRequisitionDeleteRtk handleDelete={handleDelete} />
      </StyledGridPage>
    </StyledBoxPage>
  );
};

export default Rtk;
