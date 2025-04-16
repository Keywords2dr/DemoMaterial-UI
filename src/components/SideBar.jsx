import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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

// Dữ liệu người dùng giả lập cho tìm kiếm
const mockUsers = [
  {
    name: "Nguyễn Văn A",
    username: "@nguyenvana",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Trần Thị B",
    username: "@tranthib",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Lê Văn C",
    username: "@levanc",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Phạm Thị D",
    username: "@phamthid",
    avatar: "https://via.placeholder.com/40",
  },
];

function Sidebar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Xử lý thay đổi từ khóa tìm kiếm
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchValue(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filteredUsers = mockUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  // Xóa từ khóa tìm kiếm
  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  // Danh sách người liên hệ gần đây
  const contacts = [
    {
      name: "Nguyễn Văn A",
      username: "@nguyenvana",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Trần Thị B",
      username: "@tranthib",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Lê Văn C",
      username: "@levanc",
      avatar: "https://via.placeholder.com/40",
    },
  ];

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
          placeholder="Tìm kiếm người dùng..."
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
            mb: 2,
          }}
        />

        {/* Hiển thị kết quả tìm kiếm */}
        {searchValue && (
          <Box
            sx={{
              backgroundColor: "#16181c",
              borderRadius: "20px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              padding: "16px",
              mb: 2,
            }}
          >
            {searchResults.length > 0 ? (
              <List>
                {searchResults.map((user, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#393939",
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={user.avatar} sx={{ width: 40, height: 40 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "0.9rem",
                            color: "#f5f5f5",
                          }}
                        >
                          {user.name}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.8rem", color: "#808080" }}
                        >
                          {user.username}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography
                sx={{
                  color: "#808080",
                  textAlign: "center",
                  fontSize: "0.9rem",
                }}
              >
                Không tìm thấy người dùng
              </Typography>
            )}
          </Box>
        )}

        {/* Danh sách người liên hệ gần đây */}
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
    </>
  );
}

export default Sidebar;