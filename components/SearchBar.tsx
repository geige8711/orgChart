import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
export default function SearchBar() {
    return (
        <Box
            component="div"
            sx={{
                position: "relative",
                display: "block",
                width: "80vw",
                maxWidth: "800px",
                // marginX: "2px",
                backgroundColor: "white",
                borderRadius: "4px",
            }}
        >
            <TextField
                id="search-bar"
                sx={{
                    width: "100%",
                }}
                onInput={(e) => {}}
                variant="outlined"
                placeholder="Search..."
                size="medium"
            />
            <IconButton
                type="submit"
                aria-label="search"
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "20%",
                }}
            >
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </Box>
    );
}
