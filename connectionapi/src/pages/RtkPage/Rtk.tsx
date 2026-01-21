import { Box, Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { ColumnTable, RowsTable } from "../../utils/Consts";

const Rtk = () => {
  const specifyRequisition = RowsTable.find((opt) => opt.name === "RTK");
  
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
          <Typography variant="h1">RTK</Typography>
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
          <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2 }}>
            <Typography variant="h4">Divisao 1</Typography>
          </Grid>
          <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2 }}>
            <Typography variant="h4">Divisao 2</Typography>
          </Grid>
          <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2 }}>
            <Typography variant="h4">Divisao 3</Typography>
          </Grid>
          <Grid size={3} sx={{ border: "1px solid #ddd", padding: 2 }}>
            <Typography variant="h4">Divisao 4</Typography>
          </Grid>
        </Grid>
      </Box>
    );
}

export default Rtk
