import React, { useState } from 'react';
import { Box, Button, IconButton, Paper } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Iconify } from 'src/components/iconify';

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
    ],
};

const ReplyBox: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <Paper elevation={0} sx={{ padding: 2, borderRadius: '8px' }}>
            <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    fontFamily: 'Arial, sans-serif',
                    '& .ql-container': {
                        border: 'none !important',

                    },
                    '& .ql-editor': {
                        minHeight: '150px',
                        border: 'none !important',
                        paddingTop: '10px',
                    },
                }}
            >
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    placeholder="Write something awesome..."
                    style={{ minHeight: '150px' }}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <IconButton>
                    <Iconify icon="eva:attach-outline" />
                </IconButton>
                <Button variant="contained" color="success">
                    Send
                </Button>
            </Box>
        </Paper>
    );
};

export default ReplyBox;
