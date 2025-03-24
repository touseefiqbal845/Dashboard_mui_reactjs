import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  Badge,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import { Iconify } from 'src/components/iconify';
import { Contact } from 'src/typescript-Interface/chat';

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
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: 320,
        bgcolor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '70vh',
        // display: { xs: selectedContact ? 'none' : 'flex', sm: 'block' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <IconButton sx={{ display: { sm: 'none' }, color: theme.palette.primary.main }}>
            <FaArrowLeft size={20} /> 
          </IconButton>
         
        </Box>

        <Paper sx={{ p: '6px 12px', display: 'flex', borderRadius: 2, width: '100%' }}>
          <OutlinedInput
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Mail
            ..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify width={20} icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>

      <Box sx={{
        flex: 1, overflowY: 'auto',
        "&::-webkit-scrollbar": { width: "2px" },
        "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: "10px" },
        "&::-webkit-scrollbar-track": { background: "#f5f5f5" }


      }}>
        <List sx={{ p: 0 }}>
          {filteredContacts.map((contact) => (
            <ListItem
              key={contact.id}
              button
              selected={selectedContact?.id === contact.id}
              onClick={() => onSelectContact(contact)}
              sx={{
                px: 2,
                py: 1.5,
                borderBottom: `1px solid ${theme.palette.divider}`,
                '&.Mui-selected': { bgcolor: theme.palette.action.selected },
                '&:hover': { bgcolor: theme.palette.action.hover },
              }}
            >
              <ListItemAvatar>
              
                  <Avatar src={contact.avatar} alt={contact.name} sx={{ width: 48, height: 48 }} />
               
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
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
    </Box>
  );
};

export default ChatSidebar;
