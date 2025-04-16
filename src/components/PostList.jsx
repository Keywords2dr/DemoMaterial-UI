import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const postItem = [
  {
    caption:
      "Món paella ấn tượng này là món ăn hoàn hảo cho tiệc tùng và là bữa ăn vui vẻ để nấu cùng khách. Thêm 1 cốc đậu Hà Lan đông lạnh cùng với trai, nếu bạn muốn.",
    img: "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 184,
    comment: 10,
    view: 2.2,
    share: 24,
  },
  {
    caption:
      "Món paella ấn tượng này là món ăn hoàn hảo cho tiệc tùng và là bữa ăn vui vẻ để nấu cùng khách. Thêm 1 cốc đậu Hà Lan đông lạnh cùng với trai, nếu bạn muốn.",
    img: "https://images.unsplash.com/photo-1742412615574-ce65e63598d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d",
    like: 100,
    comment: 5,
    view: 1.2,
    share: 14,
  },
  {
    caption:
      "Món paella ấn tượng này là món ăn hoàn hảo cho tiệc tùng và là bữa ăn vui vẻ để nấu cùng khách. Thêm 1 cốc đậu Hà Lan đông lạnh cùng với trai, nếu bạn muốn.",
    img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 20,
    comment: 1,
    view: 1,
    share: 10,
  },
];

export const PostList = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const maxLength = 280;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setContent("");
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Bài đăng đã gửi:", content);
    handleClose();
  };

  return (
    <Box
      maxWidth={"600px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#16181c",
          borderRadius: "50px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Avatar
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ảnh đại diện người dùng"
            />
            <Typography
              variant="body1"
              color="#808080"
              fontWeight={"600"}
              onClick={handleClickOpen}
            >
              Bắt đầu nimbus...
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6ec207",
              color: "#f5f5f5",
              borderRadius: "25px",
            }}
          >
            Đăng
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <Box
          sx={{
            background: "#16181c",
            borderRadius: "20px",
            padding: "24px",
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#808080",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Avatar
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ảnh đại diện người dùng"
              sx={{ width: 60, height: 60, border: "2px solid #808080" }}
            />
          </Box>
          <DialogContent sx={{ padding: 0 }}>
            <TextField
              placeholder="Chia sẻ suy nghĩ của bạn..."
              value={content}
              onChange={handleContentChange}
              fullWidth
              multiline
              rows={5}
              inputProps={{ maxLength }}
              sx={{
                "& .MuiInputBase-root": {
                  color: "#f5f5f5",
                  backgroundColor: "#1e2126",
                  borderRadius: "16px",
                  padding: "16px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  fontSize: "1rem",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                  "&:hover fieldset": { border: "none" },
                  "&.Mui-focused fieldset": { border: "none" },
                },
              }}
            />
            <Box
              sx={{
                mt: 1,
                height: "4px",
                background: "#2a2e36",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: `${(content.length / maxLength) * 100}%`,
                  height: "100%",
                  backgroundColor: "#6ec207",
                  transition: "width 0.3s ease",
                }}
              />
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: content.length > maxLength * 0.9 ? "#ff4d4d" : "#808080",
                display: "block",
                textAlign: "right",
                mt: 0.5,
              }}
            >
              {content.length}/{maxLength}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <IconButton
                sx={{ color: "#808080", "&:hover": { backgroundColor: "#2a2e36" } }}
                onClick={() => console.log("Thêm media được nhấp")}
              >
                <ImageIcon />
              </IconButton>
              <IconButton
                sx={{ color: "#808080", "&:hover": { backgroundColor: "#2a2e36" } }}
                onClick={() => console.log("Thêm emoji được nhấp")}
              >
                <EmojiEmotionsIcon />
              </IconButton>
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", gap: 2, padding: "16px 0" }}>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "#2a2e36",
                color: "#f5f5f5",
                borderRadius: "25px",
                padding: "8px 24px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#3a3f47" },
              }}
              startIcon={<CloseIcon />}
            >
              Hủy
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!content.trim()}
              sx={{
                backgroundColor: "#6ec207",
                color: "#f5f5f5",
                borderRadius: "25px",
                padding: "8px 24px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#5ba005" },
                "&.Mui-disabled": {
                  backgroundColor: "#3a3f47",
                  color: "#808080",
                },
              }}
              startIcon={<SendIcon />}
            >
              Đăng
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {postItem.map((item, index) => {
        return (
          <Post
            key={index}
            caption={item.caption}
            img={item.img}
            like={item.like}
            comment={item.comment}
            view={item.view}
            share={item.share}
          />
        );
      })}
    </Box>
  );
};