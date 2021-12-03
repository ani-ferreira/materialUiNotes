import React from "react";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const NoteCard = (props) => {
  return (
    <Container>
      <Card
        sx={{
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        }}
      >
        <CardHeader
          title={props.note.title}
          subheader={props.note.category}
          action={
            <IconButton onClick={props.onDelete}>
              <DeleteOutlineIcon sx={{ color: "#ff6666" }} />
            </IconButton>
          }
        />
        <CardContent>
          <Typography color="textSecondary">{props.note.body}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NoteCard;
