import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ChatWindow from './ChatWindow';
import ChatSidebar from './ChatSidebar';




const theme = createTheme({
  palette: {
    mode: 'light',
    //@ts-ignore
    primary: {
      lighter: "#D0ECFE",
      light: "#73BAFB",
      main: "#4caf50",
      dark: "#0C44AE",
      darker: "#042174",
      contrastText: "#FFFFFF"
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #e0e0e0',
        },
      },
    },
  },
});


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


const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'Reece Chung',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&auto=format',
    status: 'busy',
    lastMessage: 'The concert was a mesmerizing experience',
    time: '2 hours',
    isOnline: false,
    info: {
      title: 'Software Developer',
      address: '36901 Elmer Spurs Apt. 762-Miramar, DE / 92836',
      phone: '+91 22 1234 5678',
      email: 'letha.lubowitz24@yahoo.com'
    }
  },
  {
    id: '2',
    name: 'Lucian Obrien',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&auto=format',
    status: 'Active now',
    lastMessage: 'The waves crashed against the shore',
    time: 'a few seconds',
    isOnline: true,
  },
  {
    id: '3',
    name: 'Mina Patel',
    avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop&auto=format',
    status: 'offline',
    lastMessage: 'Let’s catch up soon!',
    time: '10 minutes',
    isOnline: false,
  },
  {
    id: '4',
    name: 'Ethan Nguyen',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&auto=format',
    status: 'online',
    lastMessage: 'Just finished reading that book',
    time: '5 minutes',
    isOnline: true,
  },
  {
    id: '5',
    name: 'Sophia Gomez',
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100&h=100&fit=crop&auto=format',
    status: 'busy',
    lastMessage: 'Preparing for the big presentation',
    time: '1 hour',
    isOnline: false,
  },
  {
    id: '6',
    name: 'James Carter',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format',
    status: 'Active now',
    lastMessage: 'Heading out for a run',
    time: 'Just now',
    isOnline: true,
  },
  {
    id: '7',
    name: 'Amara Singh',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&auto=format',
    status: 'offline',
    lastMessage: 'Loved the movie last night!',
    time: '30 minutes',
    isOnline: false,
  },
  {
    id: '8',
    name: 'Oliver Brown',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format',
    status: 'online',
    lastMessage: 'See you at the game later!',
    time: '15 minutes',
    isOnline: true,
  },
  {
    id: '9',
    name: 'Zara Khalid',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format',
    status: 'away',
    lastMessage: 'Can’t wait for our trip!',
    time: '10 minutes',
    isOnline: false,
  },
  {
    id: '10',
    name: 'Nathan Kim',
    avatar: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=100&h=100&fit=crop&auto=format',
    status: 'offline',
    lastMessage: 'Had a great day at work!',
    time: '3 hours',
    isOnline: false,
  }
];

const initialMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      text: 'The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.',
      sender: 'Reece Chung',
      timestamp: '2 hours',
      isOwn: false,
    },
    {
      id: '2',
      text: 'The waves crashed against the shore, creating a soothing symphony of sound.',
      sender: 'Me',
      timestamp: 'an hour',
      isOwn: true,
    },
  ],
  '2': [
    {
      id: '1',
      text: 'The waves crashed against the shore',
      sender: 'Lucian Obrien',
      timestamp: 'a few seconds',
      isOwn: false,
    },
  ],
  '3': [
    {
      id: '1',
      text: 'Let’s catch up soon!',
      sender: 'Mina Patel',
      timestamp: '10 minutes',
      isOwn: false,
    },
  ],
  '4': [
    {
      id: '1',
      text: 'Just finished reading that book',
      sender: 'Ethan Nguyen',
      timestamp: '5 minutes',
      isOwn: false,
    },
  ],
  '5': [
    {
      id: '1',
      text: 'Preparing for the big presentation',
      sender: 'Sophia Gomez',
      timestamp: '1 hour',
      isOwn: false,
    },
  ],
  '6': [
    {
      id: '1',
      text: 'Heading out for a run',
      sender: 'James Carter',
      timestamp: 'Just now',
      isOwn: false,
    },
  ],
  '7': [
    {
      id: '1',
      text: 'Loved the movie last night!',
      sender: 'Amara Singh',
      timestamp: '30 minutes',
      isOwn: false,
    },
  ],
  '8': [
    {
      id: '1',
      text: 'See you at the game later!',
      sender: 'Oliver Brown',
      timestamp: '15 minutes',
      isOwn: false,
    },
  ],
  '9': [
    {
      id: '1',
      text: 'Can’t wait for our trip!',
      sender: 'Zara Khalid',
      timestamp: '10 minutes',
      isOwn: false,
    },
  ],
  '10': [
    {
      id: '1',
      text: 'Had a great day at work!',
      sender: 'Nathan Kim',
      timestamp: '3 hours',
      isOwn: false,
    },
  ]
};

export { initialContacts, initialMessages };


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
          ? {
            ...contact,
            lastMessage: text,
            time: 'just now',
          }
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
            ? {
              ...contact,
              lastMessage: reply.text,
              time: 'just now',
            }
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
        <ChatSidebar
          contacts={contacts}
          selectedContact={selectedContact}
          onSelectContact={setSelectedContact}
        />
        <ChatWindow
          contact={selectedContact}
          messages={selectedContact ? messages[selectedContact.id] || [] : []}
          onSendMessage={handleSendMessage}
          onBack={() => setSelectedContact(null)}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;