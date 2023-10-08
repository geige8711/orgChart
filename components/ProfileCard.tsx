import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";

export interface ProfileCardProps {
    title: string;
    name: string;
    profileImgSrc: string;
}

export default function ProfileCard({
    name,
    title,
    profileImgSrc,
}: ProfileCardProps) {
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Avatar
                alt="Remy Sharp"
                src={profileImgSrc}
                sx={{ width: 56, height: 56 }}
            />
            <Box
                component="div"
                sx={{
                    display: "Column",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        fontSize: "16px",
                    }}
                >
                    {name}
                </Box>
                <Box
                    component="div"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "normal",
                    }}
                >
                    {title}
                </Box>
            </Box>
        </Box>
    );
}
