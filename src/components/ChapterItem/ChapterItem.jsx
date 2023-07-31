import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
const ChapterItem = ({ chapter }) => {
  return (
    <div>
      <Grid item lg={8} md={4} xs={6}>
        <Card sx={{ minWidth: 375 }}>
          <CardContent className="card">
            <Typography color="text.secondary">
              {chapter.chapter_number}
            </Typography>
            <Typography variant="h5" component="div">
              {chapter.name}
            </Typography>
            <Typography color="text.secondary">
              {chapter.arabic_name}
            </Typography>
            <Typography color="text.secondary">
              {chapter.translated_name}
            </Typography>
            <Button size="small">Bookmark</Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default ChapterItem;
