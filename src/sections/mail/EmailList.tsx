import React from "react";
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, TextField } from "@mui/material";

const emailData = [
  { name: "Jayvion Simon", message: "Occaecati est et ill...", time: "42 minutes", avatar: "/avatars/1.png", active: true },
  { name: "Lucian Obrien", message: "Atque eaque ducimus m...", time: "a day", avatar: "", color: "#29b6f6" },
  { name: "Deja Brady", message: "Rerum eius velit dolore...", time: "2 days", avatar: "", color: "#8e24aa" },
  { name: "Harrison Stein", message: "Et non omnis qui. Qui s...", time: "3 days", avatar: "/avatars/2.png", dot: true },
  { name: "Reece Chung", message: "Nihil ea sunt facilis pra...", time: "4 days", avatar: "/avatars/3.png" },
  { name: "Lainey Davidson", message: "Non rerum modi. Accus...", time: "5 days", avatar: "/avatars/4.png" },
  { name: "Cristopher Cardenas", message: "Est enim et sit non imp...", time: "6 days", avatar: "", color: "#26a69a" },
  { name: "Melanie Noble", message: "Unde a inventore et. Se...", time: "7 days", avatar: "/avatars/5.png" },
  { name: "Chase Day", message: "Eaque natus adipisci so...", time: "8 days", avatar: "/avatars/6.png" },
];

const EmailList: React.FC = () => {
  return (
    <Box sx={{ width: 320, bgcolor: "#fff", borderRadius: 2, overflow: "hidden", p: 2 }}>
      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          mb: 2,
          bgcolor: "#f4f6f8",
          "& .MuiOutlinedInput-root": { borderRadius: 10 },
        }}
      />

      {/* Email List */}
      <List>
        {emailData.map(({ name, message, time, avatar, color, active, dot }, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: active ? "#f4f6f8" : "transparent",
              borderRadius: 2,
              mb: 0.5,
              px: 2,
              py: 1.5,
            }}
          >
            {/* Avatar or Letter Icon */}
            <ListItemAvatar>
              {avatar ? (
                <Avatar src={avatar} />
              ) : (
                <Avatar sx={{ bgcolor: color }}>{name[0]}</Avatar>
              )}
            </ListItemAvatar>

            {/* Name & Message */}
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{name}</Typography>
              }
              secondary={
                <Typography sx={{ fontSize: 12, color: "#6b7280" }}>{message}</Typography>
              }
            />

            {/* Time & Read Indicator */}
            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: 12, color: "#6b7280" }}>{time}</Typography>
              {dot && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "#29b6f6",
                    borderRadius: "50%",
                    mt: 0.5,
                    mx: "auto",
                  }}
                />
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EmailList;
