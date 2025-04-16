import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Link,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// Thêm CSS animation cho hiệu ứng pulse
const keyframes = `
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

function Sidebar() {
  const [searchValue, setSearchValue] = useState("");

  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <>
      <style>{keyframes}</style>
      <Box
        sx={{
          position: "fixed",
          width: "360px",
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: "#808080",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#6ec207" },
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: searchValue && (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch} sx={{ color: "#808080" }}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              color: "#f5f5f5",
              backgroundColor: "#16181c",
              borderRadius: "50px",
              padding: "8px 16px",
              fontSize: "0.95rem",
              transition: "transform 0.2s ease, box-shadow 0.3s ease",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid #808080",
                borderRadius: "50px",
              },
              "&:hover fieldset": {
                borderColor: "#6ec207",
                boxShadow: "0 0 8px rgba(110, 194, 7, 0.3)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6ec207",
                boxShadow: "0 0 12px rgba(110, 194, 7, 0.5)",
              },
            },
            "& .MuiInputBase-root": {
              "&:hover": {
                transform: "scale(1.02)",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#808080",
              opacity: 1,
            },
          }}
        />

        {/* Tạo khoảng cách 20px */}
        <Box sx={{ height: "20px" }} />

        <Box
          sx={{
            backgroundColor: "#16181c",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            padding: "16px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "150px",
          }}
        >
          {/* Danh sách người liên hệ gần đây */}
          <Box sx={{}}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#f5f5f5",
                fontSize: "1.1rem",
                textAlign: "center",
              }}
            >
              Người liên hệ gần đây
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              {contacts.map((contact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "80px",
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "#1e2126",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.2s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0 0 12px rgba(110, 194, 7, 0.5)",
                      },
                    }}
                  >
                    <Avatar
                      alt={contact.name}
                      src={contact.avatar}
                      sx={{ width: 70, height: 70 }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#f5f5f5",
                      fontSize: "0.85rem",
                      mt: 1,
                      textAlign: "center",
                      maxWidth: "80px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {contact.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ marginTop: "20px", textAlign: "center" }}>
              <Link
                href="#"
                sx={{
                  display: "inline-block",
                  backgroundColor: "#6ec207",
                  color: "#f5f5f5",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  transition: "transform 0.2s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 8px rgba(110, 194, 7, 0.5)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "0.9rem" }}>Xem thêm</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;