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
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        justifyContent="center"
                        // sx={{
                        //     "@media (max-width: 600px)": {

                        //     },
                        // }}
                    >
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            Legal
                        </Typography>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            Privacy
                        </Typography>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            Careers
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            Services
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            Follow Us
                        </Typography>
                        <Typography
                            variant="h6"
                            color="#FFF"
                            gutterBottom
                            sx={{ textAlign: "center" }}
                        >
                            <Link href="#" color="#FFF">
                                <Facebook />
                            </Link>
                            <Link href="#" color="#FFF" sx={{ pl: 1, pr: 1 }}>
                                <Instagram />
                            </Link>
                            <Link href="#" color="#FFF">
                                <Twitter />
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
