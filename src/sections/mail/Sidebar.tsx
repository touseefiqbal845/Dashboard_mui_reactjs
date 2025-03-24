import React from "react";
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const menuItems = [
    { text: "All", icon: "mdi:email-multiple", count: 3 },
    { text: "Inbox", icon: "mdi:inbox", count: 1 },
    { text: "Sent", icon: "mdi:send" },
    { text: "Drafts", icon: "mdi:file-document-edit-outline" },
    { text: "Trash", icon: "mdi:trash-can-outline" },
    { text: "Spam", icon: "mdi:alert-circle-outline", count: 1 },
    { text: "Important", icon: "mdi:arrow-right-bold-outline", count: 1 },
    { text: "Starred", icon: "mdi:star-outline", count: 1 },
    { text: "Social", icon: "mdi:account-group-outline", color: "#64d8cb" },
    { text: "Spam", icon: "mdi:tag-outline", color: "#ffd54f", count: 2, bold: true },
    { text: "Forums", icon: "mdi:forum-outline", color: "#ff8a80", count: 1 },
];

const Sidebar: React.FC = () => {
    return (
        <Box sx={{ width: 450, bgcolor: "#f4f6f8", p: 2 }}>
            <Button variant="contained" fullWidth sx={{ mb: 2, bgcolor: "#1e1e1e", color: "#fff", fontWeight: "bold" }}>
                <Icon icon="mdi:pencil" width="20" style={{ marginRight: 8 }} />
                Compose
            </Button>
            <List>
                {menuItems.map(({ text, icon, count, color, bold }) => (
                    <ListItem key={text} button>
                        <ListItemIcon>
                            <Icon icon={icon} width="22" style={{ color: color || "#6b7280" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontWeight: bold ? "bold" : "normal", color: bold ? "#000" : "inherit" }}>
                                    {text}
                                </Typography>
                            }
                        />
                        {count && <Typography sx={{ fontSize: "14px", color: "#6b7280" }}>{count}</Typography>}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
