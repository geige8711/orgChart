import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    MenuItem,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Blog",
        href: "/blog",
    },
];

const useStyles = makeStyles({
    header: {
        top: 0,
        position: "sticky",
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "40px 60px 0px 10px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "flex-start",
    },
});

export default function Navbar() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                      ...prevState,
                      mobileView: false,
                  }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    aria-haspopup="true"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <Box className={drawerContainer}>
                        {getDrawerChoices()}
                        <CloseIcon
                            onClick={handleDrawerClose}
                            htmlColor="black"
                            fontSize="large"
                            sx={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                </Drawer>

                <Box>{femmecubatorLogo}</Box>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }, index) => {
            return (
                <Button
                    href={href}
                    color={"inherit"}
                    style={{ textDecoration: "none" }}
                    key={index}
                >
                    <MenuItem>{label}</MenuItem>
                </Button>
            );
        });
    };

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            HelloMolly
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }, index) => {
            return (
                <Button
                    key={index}
                    color="inherit"
                    href={href}
                    className={menuButton}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <AppBar className={header}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    );
}
