import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  InputBase,
  Paper,
  Badge,
  IconButton,
} from '@mui/material';
import { FaSearch, FaUsers, FaPhone, FaVideo, FaArrowLeft } from "react-icons/fa";



interface Message {
    id: string;
    text: string;
    sender: string;
    timestamp: string;
    isOwn?: boolean;
  }
  
   interface ContactInfo {
    title?: string;
    address?: string;
    phone?: string;
    email?: string;
  }
  
   interface Contact {
    id: string;
    name: string;
    avatar: string;
    status: string;
    lastMessage?: string;
    time?: string;
    isOnline?: boolean;
    info?: ContactInfo;
  }


interface ChatSidebarProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  contacts,
  selectedContact,
  onSelectContact,
}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: 320,
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        height: '100vh',
        display: { xs: selectedContact ? 'none' : 'block', sm: 'block' },
      }}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <IconButton sx={{ display: { sm: 'none' } }}>
            <FaArrowLeft size={20} />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Messages
          </Typography>
        </Box>
        <Paper
          sx={{
            p: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f5f5f5',
          }}
        >
          <FaSearch size={18} style={{ color: '#666' }} />
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: '0.875rem' }}
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Paper>
      </Box>

      <List sx={{ overflow: 'auto', height: 'calc(100vh - 130px)', p: 0 }}>
        {filteredContacts.map((contact) => (
          <ListItem
            key={contact.id}
            button
            selected={selectedContact?.id === contact.id}
            onClick={() => onSelectContact(contact)}
            sx={{
              px: 2,
              py: 1.5,
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&.Mui-selected': {
                bgcolor: '#f5f5f5',
              },
              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
          >
            <ListItemAvatar>
              <Badge
                variant="dot"
                color={contact.isOnline ? 'success' : 'error'}
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <Avatar
                  src={contact.avatar}
                  alt={contact.name}
                  sx={{ width: 48, height: 48 }}
                />
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {contact.name}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{ fontSize: '0.875rem' }}
                >
                  {contact.lastMessage}
                </Typography>
              }
              sx={{ ml: 1 }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}
            >
              {contact.time}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatSidebar;

