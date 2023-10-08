import * as React from "react";
import { Avatar, Box, SxProps, Theme } from "@mui/material";
import classNames from "classnames";
import useStyles from "./OrgChartStyles";
import {
    KeyboardDoubleArrowDownSharp,
    KeyboardDoubleArrowUpSharp,
} from "@mui/icons-material";

export interface ProfileNodeProps {
    title: string;
    name: string;
    profileImgSrc: string;
    level: 1 | 2 | 3 | 4;
    onExpandClick?: () => void;
    style?: SxProps<Theme>;
}

export default function ProfileNode({
    name,
    title,
    profileImgSrc,
    level,
    onExpandClick,
    style,
}: ProfileNodeProps) {
    const { rectangle, expandIndicator, level1, level2, level3, level4 } =
        useStyles({ isLevel2Expand: true });
    const [isExpand, setIsExpand] = React.useState<boolean>(false);
    const getLevelClass = (level: number) => {
        switch (level) {
            case 1:
                return level1;
            case 2:
                return level2;
            case 3:
                return level3;
            case 4:
                return level4;
        }
    };
    return (
        <Box
            component={`h${level}`}
            className={classNames(getLevelClass(level), rectangle)}
            sx={style}
        >
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
            {level !== 4 && (
                <Box
                    onClick={() => {
                        if (onExpandClick) {
                            onExpandClick();
                        }
                        setIsExpand((o) => !o);
                    }}
                    component="div"
                    className={expandIndicator}
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "15px",
                        backgroundColor: "yellow",
                        bottom: 0,
                        left: 0,
                        borderRadius: "10px",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                >
                    {isExpand ? (
                        <KeyboardDoubleArrowUpSharp
                            htmlColor="grey"
                            fontSize="small"
                        />
                    ) : (
                        <KeyboardDoubleArrowDownSharp
                            htmlColor="grey"
                            fontSize="small"
                        />
                    )}
                </Box>
            )}
        </Box>
    );
}
