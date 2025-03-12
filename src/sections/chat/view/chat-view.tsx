import React, { useState } from 'react';
import { Box, Button, Card, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import ChatWindow from '../ChatWindow';
import ChatSidebar from '../ChatSidebar';
import { DashboardContent } from 'src/layouts/dashboard';
import { initialContacts, initialMessages } from './data';
import { Contact, Message } from 'src/typescript-Interface/chat';



function App() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages);

  const handleSendMessage = (text: string) => {
    if (!selectedContact) return;

    const newMessage: Message = {
      id: String(Date.now()),
      text,
      sender: 'Me',
      timestamp: 'just now',
      isOwn: true,
    };

    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), newMessage],
    }));

    setContacts(prev =>
      prev.map(contact =>
        contact.id === selectedContact.id
          ? { ...contact, lastMessage: text, time: 'just now' }
          : contact
      )
    );

    setTimeout(() => {
      const reply: Message = {
        id: String(Date.now() + 1),
        text: getRandomReply(),
        sender: selectedContact.name,
        timestamp: 'just now',
        isOwn: false,
      };

      setMessages(prev => ({
        ...prev,
        [selectedContact.id]: [...(prev[selectedContact.id] || []), reply],
      }));

      setContacts(prev =>
        prev.map(contact =>
          contact.id === selectedContact.id
            ? { ...contact, lastMessage: reply.text, time: 'just now' }
            : contact
        )
      );
    }, Math.random() * 2000 + 1000);
  };

  const getRandomReply = () => {
    const replies = [
      "That's a beautiful observation!",
      "I completely understand what you mean.",
      "Your words paint such a vivid picture.",
      "It's amazing how nature inspires us.",
      "Those moments are truly special.",
      "The imagery in your message is wonderful.",
      "I can almost imagine being there.",
      "Such poetic expression!",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Chats
        </Typography>
      </Box>
      <Card sx={{
        height: "75vh"
      }}>
        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
          <ChatSidebar contacts={contacts} selectedContact={selectedContact} onSelectContact={setSelectedContact} />
          <ChatWindow contact={selectedContact} messages={selectedContact ? messages[selectedContact.id] || [] : []} onSendMessage={handleSendMessage} onBack={() => setSelectedContact(null)} />
        </Box>
      </Card>

    </DashboardContent>
  );
}

export default App;