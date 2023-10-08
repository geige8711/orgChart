import { Box } from "@mui/material";
import classNames from "classnames";

import useStyles from "./OrgChartStyles";
import ProfileCard from "./ProfileCard";
import ProfileNode from "./ProfileNode";
import { Employee, employeeList } from "../utility/mockData";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { StructureState, updateStructure } from "../redux/slices/structure";

export interface OrgStructure {
    id: number | undefined;
    name: string;
    level: 1 | 2 | 3 | 4;
    jobTitle: string;
    profileImageUrl: string;
    reportTo: number;
    children: OrgStructure[];
}

export default function OrgChart() {
    const dispatch = useAppDispatch();
    const structureState = useAppSelector((state) => state.structure);

    useEffect(() => {
        const copiedStructureState: StructureState = JSON.parse(
            JSON.stringify(structureState)
        );
        employeeList.forEach((em) => {
            if (em.level !== 4) {
                copiedStructureState.structure = {
                    [em.id]: false,
                    ...copiedStructureState.structure,
                };
            }
        });
        dispatch(updateStructure(copiedStructureState));
    }, []);

    const { container, level2Wrapper, level3Wrapper, level4Wrapper } =
        useStyles();

    const foundRoot = employeeList.find((item) => item.level === 1);
    if (!foundRoot) {
        return <Box>something wrong, please check with your system admin;</Box>;
    }
    const foundLevel2 = employeeList.filter((item) => item.level === 2);
    // if (foundLevel2.length <= 0) {
    //     <Box>something wrong, please check with your system admin;</Box>;
    // }
    const foundLevel3 = employeeList.filter((item) => item.level === 3);
    // if (foundLevel3.length <= 0) {
    //     <Box>something wrong, please check with your system admin;</Box>;
    // }
    const foundLevel4 = employeeList.filter((item) => item.level === 4);
    // if (foundLevel4.length <= 0) {
    //     <Box>something wrong, please check with your system admin;</Box>;
    // }

    const initial: OrgStructure = {
        ...foundRoot,
        children: foundLevel2.map((item) => ({ ...item, children: [] })),
    };

    const secondLevel: OrgStructure = foundLevel3.reduce(
        (prev, current, index) => {
            initial.children.forEach((el) => {
                if (current.reportTo === el.id) {
                    el.children.push({ ...current, children: [] });
                }
            });
            return initial;
        },
        initial
    );

    const orgStructure = foundLevel4.reduce((prev, current, index) => {
        secondLevel.children.forEach((el) => {
            el.children.forEach((it) => {
                if (current.reportTo === it.id) {
                    it.children.push({ ...current, children: [] });
                }
            });
        });
        return initial;
    }, initial);

    return (
        <Box className={container}>
            <ProfileNode
                id={orgStructure.id}
                level={1}
                profileImgSrc={orgStructure.profileImageUrl}
                name={orgStructure.name}
                title={orgStructure.jobTitle}
                style={
                    orgStructure.id && structureState.structure[orgStructure.id]
                        ? {}
                        : {
                              "&:before": { display: "none" },
                          }
                }
            />
            <Box
                component="ol"
                className={level2Wrapper}
                sx={
                    orgStructure.id && structureState.structure[orgStructure.id]
                        ? {}
                        : {
                              height: "0px",
                              overflow: "hidden",
                          }
                }
            >
                {orgStructure.children.map((level2, index2) => {
                    return (
                        <Box key={index2} component="li">
                            <ProfileNode
                                id={level2.id}
                                level={2}
                                profileImgSrc={level2.profileImageUrl}
                                name={level2.name}
                                title={level2.jobTitle}
                                style={
                                    level2.id &&
                                    structureState.structure[level2.id]
                                        ? {}
                                        : {
                                              "&:before": { display: "none" },
                                          }
                                }
                            />
                            <Box
                                component="ol"
                                className={level3Wrapper}
                                sx={
                                    level2.id &&
                                    structureState.structure[level2.id]
                                        ? {}
                                        : {
                                              height: "0px",
                                              overflow: "hidden",
                                          }
                                }
                            >
                                {level2.children.map((level3, index3) => {
                                    return (
                                        <Box key={index3} component="li">
                                            <ProfileNode
                                                id={level3.id}
                                                level={3}
                                                profileImgSrc={
                                                    level3.profileImageUrl
                                                }
                                                name={level3.name}
                                                title={level3.jobTitle}
                                                style={
                                                    level3.id &&
                                                    structureState.structure[
                                                        level3.id
                                                    ]
                                                        ? {}
                                                        : {
                                                              "&:before": {
                                                                  display:
                                                                      "none",
                                                              },
                                                          }
                                                }
                                            />
                                            <Box
                                                component="ol"
                                                className={level4Wrapper}
                                                sx={
                                                    level3.id &&
                                                    structureState.structure[
                                                        level3.id
                                                    ]
                                                        ? {}
                                                        : {
                                                              height: "0px",
                                                              overflow:
                                                                  "hidden",
                                                          }
                                                }
                                            >
                                                {level3.children.map(
                                                    (level4, index4) => (
                                                        <Box
                                                            key={index4}
                                                            component="li"
                                                        >
                                                            <ProfileNode
                                                                id={level4.id}
                                                                level={4}
                                                                profileImgSrc={
                                                                    level4.profileImageUrl
                                                                }
                                                                name={
                                                                    level4.name
                                                                }
                                                                title={
                                                                    level4.jobTitle
                                                                }
                                                            />
                                                        </Box>
                                                    )
                                                )}
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
