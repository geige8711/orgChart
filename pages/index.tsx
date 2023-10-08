import { makeStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import OrgChart from "../components/OrgChart";
import { useEffect } from "react";

const useStyles = makeStyles({
    main: {
        marginBottom: "250px",
        minHeight: "100vh",
    },
    banner: {
        position: "relative",
    },
});
export default function Index() {
    const { main, banner } = useStyles();

    return (
        <Box>
            <Navbar />
            <Box component="div" className={main}>
                <Box className={banner}>
                    <Image
                        src="/library-hero.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                        alt="hero"
                    />
                    <Box
                        component="div"
                        sx={{
                            display: "inline-block",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <SearchBar />
                    </Box>
                </Box>
                <Box>
                    <OrgChart />
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
