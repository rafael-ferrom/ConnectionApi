import { StyledContainerRequistion } from "../../style/StyledContainerRequisition";
import type { IUsersJPH } from "../../models/User";
import { Typography } from "@mui/material";

interface IContainerRequisitionGetProps {
  title: string;
  data: IUsersJPH[];
}

const ContainerRequisitionGetFetch = ({
  data,
  title,
}: IContainerRequisitionGetProps) => {

  return (
    <StyledContainerRequistion size={3}>
      <Typography variant="h4">{title}</Typography>
      {data?.map((dt) => (
        <Typography>
          {dt.id} - {dt.name}
        </Typography>
      ))}
    </StyledContainerRequistion>
  );
};

export default ContainerRequisitionGetFetch;
