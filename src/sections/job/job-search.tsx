import { Icon } from "@iconify/react";
import type { Theme, SxProps } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";

type PostSearchProps = {
  sx?: SxProps<Theme>;
};

export function PostSearch({ sx }: PostSearchProps) {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      options={[]} // Ensure this is always an array
      slotProps={{
        paper: {
          sx: {
            width: 320,
            [`& .${autocompleteClasses.option}`]: {
              typography: "body2",
            },
            ...sx,
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search Job..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Icon
                  icon="eva:search-fill"
                  width={20}
                  height={20}
                  style={{ color: "gray" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
