import { makeStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
    p: {
        marginTop: "100px",
    },
});

export default function Services() {
    const { p } = useStyles();
    return (
        <div>
            <Navbar />
            <Typography variant="h6" component="h1" className={p}>
                This is Services Page
            </Typography>
        </div>
    );
}
