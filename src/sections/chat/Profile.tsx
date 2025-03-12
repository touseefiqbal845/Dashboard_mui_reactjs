import React from 'react';
import {
  Avatar,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Box,
  ListItemIcon,
} from '@mui/material';
import { MdExpandMore } from 'react-icons/md';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFileAlt, FaMusic } from 'react-icons/fa';
import { Contact } from 'src/typescript-Interface/chat';



interface ProfileProps {
  user: Contact;
}
const ProfileSidebar : React.FC<ProfileProps> = ({ user }) => {
  console.log('user', user);

  return (
    <Paper sx={{
      height: '66vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.paper',
      // boxShadow: 1
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Avatar src={user.avatar} alt="Avatar" sx={{ width: 60, height: 60 }} />
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: 'text.primary' }}>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.info?.title}
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: 'divider' }} />

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: 2,
          pb: 2,
          mt: 1,
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-thumb": { background: "grey.400", borderRadius: "10px" },
          "&::-webkit-scrollbar-track": { background: "grey.200" }
        }}
      >
        <Accordion defaultExpanded sx={{ bgcolor: 'background.paper', boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<MdExpandMore />} sx={{ fontWeight: 'bold' }}>
            <Typography variant="subtitle1" >Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 40, }}>
                  <FaMapMarkerAlt />
                </ListItemIcon>
                <ListItemText primary={user?.info?.address || 'Not available'} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 40, }}>
                  <FaPhoneAlt />
                </ListItemIcon>
                <ListItemText primary={user?.info?.phone || 'Not available'} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 40, }}>
                  <FaEnvelope />
                </ListItemIcon>
                <ListItemText primary={user?.info?.email || 'Not available'} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ bgcolor: 'divider' }} />

        <Accordion defaultExpanded sx={{ bgcolor: 'background.paper', boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<MdExpandMore />} sx={{ fontWeight: 'bold' }}>
            <Typography variant="subtitle1" >
              Attachments ({user?.attachments?.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {user?.attachments?.length ? (
                user.attachments.map((file: any, index: number) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      {file?.type === 'audio' ? (
                        <FaMusic style={{}} />
                      ) : (
                        <FaFileAlt style={{}} />
                      )}
                    </ListItemAvatar>
                    
                    <ListItemText primary={file?.name} secondary={file?.date} />
                  </ListItem>
                ))
              ) : (
                <Typography color="text.secondary" sx={{ p: 1 }}>
                  No attachments available
                </Typography>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
};

export default ProfileSidebar;
