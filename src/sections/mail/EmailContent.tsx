import React from 'react';
import { Box, Typography, Avatar, Paper, TextField, IconButton, Button } from '@mui/material';
import { Iconify } from 'src/components/iconify';
import { Email } from 'src/typescript-Interface/email';

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface EmailContentProps {
    email: Email | null;
}


const EmailContent: React.FC<EmailContentProps> = ({ email }) => {
    if (!email) {
        return (
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                    Select an email to read
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
            {/* Subject Line */}
            <Typography variant="h6" fontWeight={600}>
                {email.subject}
            </Typography>

            {/* Email Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={email.avatar} alt={email.sender} sx={{ width: 45, height: 45, mr: 2 }}>
                        {!email.avatar && email.sender[0]}
                    </Avatar>
                    <Box>
                        <Typography fontWeight={600}>{email.sender}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            To: {email.recipients.join(', ')}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        {email.time}
                    </Typography>
                    <IconButton>
                        <Iconify icon="eva:star-outline" />
                    </IconButton>
                    <IconButton>
                        <Iconify icon="eva:corner-up-left-outline" />
                    </IconButton>
                    <IconButton>
                        <Iconify icon="eva:corner-up-left-outline" rotate={2} />
                    </IconButton>
                    <IconButton>
                        <Iconify icon="eva:trash-2-outline" />
                    </IconButton>
                    <IconButton>
                        <Iconify icon="eva:more-vertical-outline" />
                    </IconButton>
                </Box>
            </Box>

            <Paper elevation={0} sx={{ mt: 2, p: 2, borderRadius: 2,minHeight:"auto" }}>
                <Typography variant="body1">{email.body}</Typography>
            </Paper>


        </Box>
    );
};

export default EmailContent;
