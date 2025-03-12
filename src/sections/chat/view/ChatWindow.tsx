import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  Paper,
  Badge,
  Fade,
  Collapse,
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

interface ChatWindowProps {
  contact: Contact | null;
  messages: Message[];
  onSendMessage: (message: string) => void;
  onBack: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  contact,
  messages,
  onSendMessage,
  onBack,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
      setIsTyping(false);
    }
  };

  if (!contact) {
    return (
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Select a conversation to start chatting
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton
          sx={{ display: { xs: 'inline-flex', sm: 'none' }, mr: 1 }}
          onClick={onBack}
        >
          <FaArrowLeft size={20} />
        </IconButton>
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
        <Box sx={{ ml: 2, flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {contact.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isTyping ? 'typing...' : contact.status}
          </Typography>
        </Box>
        <IconButton>
          <FaPhone size={20} />
        </IconButton>
        <IconButton>
          <FaVideo size={20} />
        </IconButton>
        <IconButton onClick={() => setShowInfo(!showInfo)}>
          <FaUsers size={20} />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {messages.map((message) => (
              <Fade key={message.id} in={true} timeout={500}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: message.isOwn ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-end',
                    gap: 1,
                  }}
                >
                  {!message.isOwn && (
                    <Avatar
                      src={contact.avatar}
                      sx={{ width: 32, height: 32 }}
                    />
                  )}
                  <Paper
                    sx={{
                      p: 2,
                      maxWidth: '60%',
                      bgcolor: message.isOwn ? '#e3f2fd' : 'background.paper',
                      color: 'text.primary',
                      borderRadius: 2,
                      boxShadow: 'none',
                      border: '1px solid',
                      borderColor: message.isOwn ? '#bbdefb' : '#e0e0e0',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
                    >
                      {message.text}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        mt: 0.5,
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                      }}
                    >
                      {message.timestamp}
                    </Typography>
                  </Paper>
                </Box>
              </Fade>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <Paper
            sx={{
              p: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'flex-end',
              gap: 1,
            }}
          >
            <IconButton size="small">
              <FaUsers size={20} />
            </IconButton>
            <IconButton size="small">
              <FaUsers size={20} />
            </IconButton>
            <InputBase
              multiline
              maxRows={4}
              sx={{
                flex: 1,
                bgcolor: '#f5f5f5',
                borderRadius: 1,
                p: 1,
                fontSize: '0.9375rem',
              }}
              placeholder="Type a message"
              value={newMessage}
              onChange={handleTyping}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <IconButton
              onClick={handleSend}
              color="primary"
              disabled={!newMessage.trim()}
              size="small"
            >
              <FaUsers size={20} />
            </IconButton>
          </Paper>
        </Box>

        <Collapse
          in={showInfo}
          orientation="horizontal"
          sx={{ width: showInfo ? 280 : 0 }}
        >
          <Box
            sx={{
              width: 280,
              height: '100%',
              borderLeft: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              p: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Information
            </Typography>
            
            {contact.info && (
              <>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {contact.info.title}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <FaUsers size={18} />
                    <Typography variant="body2" color="text.secondary">
                      {contact.info.address}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <FaUsers size={18} />
                    <Typography variant="body2" color="text.secondary">
                      {contact.info.phone}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <FaUsers size={18} />
                    <Typography variant="body2" color="text.secondary">
                      {contact.info.email}
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default ChatWindow;