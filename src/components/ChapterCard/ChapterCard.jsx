// HOOKS
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// MUI
import { Grid, Card, Typography, CardContent, Button } from "@mui/material";
// Components
import FormModal from "../FormModal/FormModal";

const ChapterCard = ({ chapter }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  // Open Modal
  const handleOpenModal = () => {
    setOpen(true);
  };
  // Close Modal
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* Form Modal after user Clicks add to plan */}
      <FormModal open={open} handleCloseModal={handleCloseModal} />
      <Grid item lg={3} md={4} xs={6}>
        <Card sx={{ minWidth: 375, backgroundColor: "#00366F" }}>
          {/* Go to Verses Page when clicked on content! */}
          <CardContent
            onClick={() => history.push(`/chapters/${chapter.id}`)}
            className="card-content"
          >
            <Typography>{chapter.chapter_number}</Typography>
            <Typography>{chapter.name}</Typography>
            <Typography>{chapter.arabic_name}</Typography>
            <Typography>{chapter.translated_name}</Typography>
          </CardContent>
          <div size="small" onClick={handleOpenModal} className="primary-btn">
            <ion-icon name="bookmark-outline" size="small"></ion-icon>
            Add to Plan
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default ChapterCard;
