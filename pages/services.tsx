import { makeStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles({
    p: {
        marginTop: "100px",
    },
});

export default function Services() {
    const { p } = useStyles();
    return (
        <Box>
            <Navbar />
            <Typography variant="h6" component="h1" className={p}>
                This is Services Page
            </Typography>
        </Box>
    );
}
