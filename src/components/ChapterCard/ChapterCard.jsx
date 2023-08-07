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
          <CardContent
            onClick={() => history.push(`/user/${chapter.id}/${chapter.id}`)}
            className="card-content"
          >
            <Typography>{chapter.chapter_number}</Typography>
            <Typography>{chapter.name}</Typography>
            <Typography>{chapter.arabic_name}</Typography>
            <Typography>{chapter.translated_name}</Typography>
          </CardContent>
          <Button size="small" onClick={handleOpenModal}>
            Add to Plan
          </Button>
        </Card>
      </Grid>
    </div>
  );
};

export default ChapterCard;
