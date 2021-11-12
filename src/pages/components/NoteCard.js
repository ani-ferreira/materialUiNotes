import React from "react";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const NoteCard = (props) => {
  return (
    <Container>
      <Card>
        <CardHeader title={props.note.title} subheader={props.note.category} />
        <CardContent>
          <Typography color="textSecondary">{props.note.text}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NoteCard;
