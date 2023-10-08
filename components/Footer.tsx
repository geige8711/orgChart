import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "black",
                p: 6,
                position: "sticky",
                bottom: 0,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            Legal
                        </Typography>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            Privacy
                        </Typography>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            Careers
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            Services
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#FFF" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="#" color="#FFF">
                            <Facebook />
                        </Link>
                        <Link href="#" color="#FFF" sx={{ pl: 1, pr: 1 }}>
                            <Instagram />
                        </Link>
                        <Link href="#" color="#FFF">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
