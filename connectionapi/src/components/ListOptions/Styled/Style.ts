import { Link, List, ListItem, ListItemText, styled } from "@mui/material";

export const StyledList = styled(List)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "1rem",
});

export const StyledListItem = styled(ListItem)({
    display: "flex", 
    flexDirection: "column"
})

export const StyledListItemText = styled(ListItemText)({
    textAlign: "center",
})

export const StyledLink = styled(Link)({
    color: "black"
})
