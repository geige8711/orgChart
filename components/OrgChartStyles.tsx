import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface ChartStyleProps {
    isLevel2Expand?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        maxWidth: "1000px",
        padding: "0 10px",
        margin: "0 auto",
        textAlign: "center",
        "& ol": {
            listStyle: "none",
        },
        "& *": {
            padding: 0,
            margin: 0,
            boxSizing: "border-box",
        },
    },
    level1: {
        width: "50%",
        margin: "0 auto 40px",
        background: "#8dccad",
        position: "relative",

        "&:before": {
            content: '""',
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: (props: ChartStyleProps) =>
                props.isLevel2Expand ? "20px" : "0px",
            backgroundColor: "black",
            [theme.breakpoints.down(700)]: {
                display: "none",
            },
        },
        [theme.breakpoints.down(700)]: {
            width: "100%",
            marginBottom: "20px",
        },
    },
    rectangle: {
        position: "relative",
        padding: "20px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
        [theme.breakpoints.down(700)]: {
            padding: "20px 10px",
        },
        borderRadius: "10px",
    },
    level2Wrapper: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        transition: "height 7s linear",
        [theme.breakpoints.down(700)]: {
            display: "block",
            width: "90%",
            marginLeft: "10%",
        },
        "& > li:not(:first-child)": {
            [theme.breakpoints.down(700)]: {
                marginTop: "50px",
            },
        },
        "&:before": {
            content: '""',
            position: "absolute",
            top: "-20px",
            left: "25%",
            width: "50%",
            height: "2px",
            backgroundColor: "black",
            [theme.breakpoints.down(700)]: {
                left: "-20px",
                width: "2px",
                height: "calc(100% + 40px)",
            },
        },

        "& li": {
            position: "relative",
        },
        "& > li:before": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: "100%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "20px",
            backgroundColor: "black",
            [theme.breakpoints.down(700)]: {
                display: "none",
            },
        },
    },
    level2: {
        width: "70%",
        margin: "0 auto 40px",
        background: "#f5cc7f",
        position: "relative",
        "&:before": {
            content: '""',
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "20px",
            backgroundColor: "black",
        },
        "&:after": {
            display: "none",
            content: '""',
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(-100%,-50%)",
            width: "20px",
            height: "2px",
            backgroundColor: "black",
            [theme.breakpoints.down(700)]: {
                display: "block",
            },
        },
        [theme.breakpoints.down(700)]: {
            width: "100%",
        },
    },
    level3Wrapper: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridColumnGap: "20px",
        width: "90%",
        margin: "0 auto",
        "&:before": {
            content: '""',
            position: "absolute",
            top: "-20px",
            left: "calc(25% - 5px)",
            width: "calc(50% + 10px)",
            height: "2px",
            backgroundColor: "black",
        },
        "& > li:before": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translate(-50%, -100%)",
            width: "2px",
            height: "20px",
            backgroundColor: "black",
        },
    },
    level3: {
        marginBottom: "20px",
        backgroundColor: "#7b9fe0",
    },
    level4Wrapper: {
        position: "relative",
        width: "80%",
        marginLeft: "auto",
        "&:before": {
            content: '""',
            position: "absolute",
            top: "-20px",
            left: "-20px",
            width: "2px",
            height: "calc(100% + 20px)",
            backgroundColor: "black",
        },
        "& li + li": {
            marginTop: "20px",
        },
    },
    level4: {
        fontWeight: "normal",
        backgroundColor: "#f27c8d",
        "&:before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(-100%,-50%)",
            width: "20px",
            height: "2px",
            backgroundColor: "black",
        },
    },
    expandIndicator: {
        animation: `$blink 1s infinite`,
    },
    "@keyframes blink": {
        "50%": {
            opacity: 0,
        },
    },
}));

export default useStyles;
