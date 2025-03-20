import React, { useState } from "react";
import { Tabs, Tab, Badge, Box } from "@mui/material";

import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type UserTableToolbarProps = {
  numSelected: number;
  filterName: string;
  onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function UserTableToolbar({ numSelected, filterName, onFilterName }: UserTableToolbarProps) {
  const [selectedTab, setSelectedTab] = useState(3);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >

      {numSelected > 0 ? (
        <>
        </>
      ) : (
        <OutlinedInput
          fullWidth
          value={filterName}
          onChange={onFilterName}
          placeholder="Search order..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify width={20} icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
          sx={{ maxWidth: 320 }}
        />
      )}{numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={selectedTab} onChange={handleChange} variant="scrollable">
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={3}>
                  All <Badge badgeContent={20} color="info" />
                </Box>
              }
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={3}>
                  Pending <Badge badgeContent={6} color="warning" />
                </Box>
              }
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={3}>
                  Completed <Badge badgeContent={10} color="success" />
                </Box>
              }
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={3}>
                  Cancelled <Badge badgeContent={2} color="error" />
                </Box>
              }
            />
            <Tab
              label={
                <Box display="flex" alignItems="center" gap={3}>
                  Refunded <Badge badgeContent={2} color="secondary" />
                </Box>
              }
            />
          </Tabs>
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="solar:trash-bin-trash-bold" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
