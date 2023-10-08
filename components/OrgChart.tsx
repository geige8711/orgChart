import { Box } from "@mui/material";
import classNames from "classnames";

import useStyles from "./OrgChartStyles";

export default function OrgChart() {
    const {
        container,
        level1,
        rectangle,
        level2Wrapper,
        level2,
        level3Wrapper,
        level3,
        level4Wrapper,
        level4,
    } = useStyles();
    return (
        <Box className={container}>
            <Box component="h1" className={classNames(level1, rectangle)}>
                CEO
            </Box>
            <Box component="ol" className={level2Wrapper}>
                <Box component="li">
                    <Box
                        component="h2"
                        className={classNames(level2, rectangle)}
                    >
                        Director A
                    </Box>
                    <Box component="ol" className={level3Wrapper}>
                        <Box component="li">
                            <Box
                                component="h3"
                                className={classNames(level3, rectangle)}
                            >
                                Manager A
                            </Box>
                            <Box component="ol" className={level4Wrapper}>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person A
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person B
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person C
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person D
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box component="li">
                            <Box
                                component="h3"
                                className={classNames(level3, rectangle)}
                            >
                                Manager B
                            </Box>
                            <Box component="ol" className={level4Wrapper}>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person A
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person B
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person C
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person D
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box component="li">
                    <Box
                        component="h2"
                        className={classNames(level2, rectangle)}
                    >
                        Director B
                    </Box>
                    <Box component="ol" className={level3Wrapper}>
                        <Box component="li">
                            <Box
                                component="h3"
                                className={classNames(level3, rectangle)}
                            >
                                Manager C
                            </Box>
                            <Box component="ol" className={level4Wrapper}>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person A
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person B
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person C
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person D
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box component="li">
                            <Box
                                component="h3"
                                className={classNames(level3, rectangle)}
                            >
                                Manager D
                            </Box>
                            <Box component="ol" className={level4Wrapper}>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person A
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person B
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person C
                                    </Box>
                                </Box>
                                <Box component="li">
                                    <Box
                                        component="h4"
                                        className={classNames(
                                            level4,
                                            rectangle
                                        )}
                                    >
                                        Person D
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
