import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  Paper,
  Badge,
  Fade,
  Popover
} from '@mui/material';
import { FaSearch, FaUsers, FaPhone, FaVideo, FaArrowLeft, FaPaperPlane, FaFile, FaSmile } from "react-icons/fa";
import ProfileSidebar from './Profile';
import EmojiPicker from 'emoji-picker-react';
import { Contact, Message } from 'src/typescript-Interface/chat';

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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();
  const theme = useTheme();

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

  const handleEmojiClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEmojiSelect = (emojiData: any) => {
    setNewMessage((prev) => prev + emojiData.emoji);
    setAnchorEl(null);
  };

  if (!contact) {
    return (
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          textAlign: 'center',
          p: 3,
        }}
      >
        <img
          src="/assets/background/chat-empty.svg"
          alt="No conversation"
          style={{ width: 200, marginBottom: 16, opacity: 0.6 }}
        />
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
        height: 'auto',
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
        <IconButton sx={{ display: { xs: 'inline-flex', sm: 'none' }, mr: 1 }} onClick={onBack}>
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
          <Avatar src={contact.avatar} alt={contact.name} sx={{ width: 48, height: 48 }} />
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
        <IconButton>
          <FaUsers size={20} />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '66vh',
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
              "&::-webkit-scrollbar": { width: "2px" },
              "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: "10px" },
              "&::-webkit-scrollbar-track": { background: "#f5f5f5" }
            }}
          >
            {messages.map((message) => (
              <Fade key={message.id} in timeout={500}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: message.isOwn ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-end',
                    gap: 1,
                  }}
                >
                  {!message.isOwn && <Avatar src={contact.avatar} sx={{ width: 32, height: 32 }} />}
                  <Paper
                    sx={{
                      p: 2,
                      maxWidth: '60%',
                      bgcolor: message.isOwn ? theme.palette.primary.lighter : theme.palette.background.neutral,
                      color: 'text.primary',
                      borderRadius: 2,
                      boxShadow: 'none',
                    }}
                  >
                    <Typography variant="body1" sx={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                      {message.text}
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'text.secondary', fontSize: '0.75rem' }}>
                      {message.timestamp}
                    </Typography>
                  </Paper>
                </Box>
              </Fade>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <Paper sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'flex-end', gap: 1 }}>
            <IconButton size="small">
              <FaFile size={20} />
            </IconButton>

            <IconButton size="small" onClick={handleEmojiClick}>
              <FaSmile size={20} />
            </IconButton>

            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <EmojiPicker onEmojiClick={handleEmojiSelect} />
            </Popover>

            <InputBase
              multiline
              maxRows={4}
              sx={{ flex: 1, bgcolor: '#f5f5f5', borderRadius: 1, p: 1, fontSize: '0.9375rem' }}
              placeholder="Type a message"
              value={newMessage}
              onChange={handleTyping}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            />

            <IconButton onClick={handleSend} color="primary" disabled={!newMessage.trim()} size="small">
              <FaPaperPlane size={20} />
            </IconButton>
          </Paper>
        </Box>
        <Box
          sx={{ width: 320 }}
        >
          <ProfileSidebar user={contact} />

        </Box>
      </Box>
    </Box>
  );
};

export default ChatWindow;
