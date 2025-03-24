import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import Sidebar from '../Sidebar';
import EmailList from '../EmailList';
import EmailContent from '../EmailContent';
import ReplyBox from '../ReplyBox';
import ChatSidebar from 'src/sections/mail/ChatSidebar';
import { Contact, Message } from 'src/typescript-Interface/chat';
import { initialContacts, initialMessages } from './data';
import { DashboardContent } from 'src/layouts/dashboard';

const emailData: Email = {
  id: '1',
  sender: 'Jayvion Simon',
  subject: 'Re: The Future of Renewable Energy: Innovations and Challenges Ahead',
  time: '24 Mar 2025 10:18 pm',
  unread: false,
  avatar: '/avatars/1.png',
  recipients: ['demo@minimals.cc', 'tyrel.greenholt@gmail.com'],
  body: 'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
};

const EmailUI: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages);

  return (
    // <Box sx={{ display: "flex", height: "100vh" }}>
    //   <Sidebar />
    //   <ChatSidebar contacts={contacts} selectedContact={selectedContact} onSelectContact={setSelectedContact} />

    //   <Box sx={{ flexGrow: 1, p: 3 }}>
    //   <EmailContent email={emailData} />

    //     <ReplyBox />
    //   </Box>
    // </Box>

    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Chats
        </Typography>
      </Box>
      <Card
        sx={{
          height: '75vh',
        }}
      >
        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
          <Sidebar />
          <ChatSidebar
            contacts={contacts}
            selectedContact={selectedContact}
            onSelectContact={setSelectedContact}
          />

          <Box sx={{ flexGrow: 1, p: 3 }}>
            <EmailContent email={emailData} />

            <ReplyBox />
          </Box>
        </Box>
      </Card>
    </DashboardContent>
  );
};

export default EmailUI;
