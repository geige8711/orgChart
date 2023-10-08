import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { employeeList } from "../utility/mockData";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { StructureState, updateStructure } from "../redux/slices/structure";
import { HighlightState, updateHighlight } from "../redux/slices/highlight";
export default function SearchBar() {
    const [result, setResult] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const dispatch = useAppDispatch();
    const structureState = useAppSelector((state) => state.structure);
    const highlightState = useAppSelector((state) => state.highlight);

    useEffect(() => {
        const copiedStructureState: StructureState = JSON.parse(
            JSON.stringify(structureState)
        );
        const copiedHighlightState: HighlightState = JSON.parse(
            JSON.stringify(highlightState)
        );
        if (search && result === 0) {
            employeeList.forEach((em) => {
                if (em.level !== 4) {
                    copiedStructureState.structure = {
                        ...copiedStructureState.structure,
                        [em.id]: false,
                    };
                }
                copiedHighlightState.highlight = {
                    ...copiedHighlightState.highlight,
                    [em.id]: false,
                };
            });
            dispatch(updateStructure(copiedStructureState));
            dispatch(updateHighlight(copiedHighlightState));
        } else if (search && result !== 0) {
            employeeList.forEach((em) => {
                if (em.level !== 4) {
                    copiedStructureState.structure = {
                        ...copiedStructureState.structure,
                        [em.id]: true,
                    };
                }
                if (
                    String(em.name)
                        .toLowerCase()
                        .includes(String(search).toLowerCase())
                ) {
                    copiedHighlightState.highlight = {
                        ...copiedHighlightState.highlight,
                        [em.id]: true,
                    };
                } else {
                    copiedHighlightState.highlight = {
                        ...copiedHighlightState.highlight,
                        [em.id]: false,
                    };
                }
            });
            dispatch(updateStructure(copiedStructureState));
            dispatch(updateHighlight(copiedHighlightState));
        } else {
            employeeList.forEach((em) => {
                copiedHighlightState.highlight = {
                    ...copiedHighlightState.highlight,
                    [em.id]: false,
                };
            });
            dispatch(updateHighlight(copiedHighlightState));
        }
    }, [search, result]);

    return (
        <Box
            component="div"
            sx={{
                position: "relative",
                display: "block",
                width: "80vw",
                maxWidth: "800px",
                // marginX: "2px",
                backgroundColor: "white",
                borderRadius: "4px",
            }}
        >
            <TextField
                id="search-bar"
                sx={{
                    width: "100%",
                }}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setResult(
                        employeeList.filter((em) =>
                            String(em.name)
                                .toLowerCase()
                                .includes(
                                    String(e.target.value).toLocaleLowerCase()
                                )
                        ).length
                    );
                }}
                value={search}
                variant="outlined"
                placeholder="Search Employee Name"
                size="medium"
            />
            {result === 0 && search && (
                <Box
                    component="h6"
                    sx={{
                        color: "red",
                        position: "absolute",
                        bottom: "-45%",
                        left: "10px",
                    }}
                >
                    No Employee Founded
                </Box>
            )}
            {result !== 0 && search && (
                <Box
                    component="h6"
                    sx={{
                        color: "green",
                        position: "absolute",
                        bottom: "-45%",
                        left: "10px",
                    }}
                >
                    {result} empolyee{result === 1 ? "" : "s"} found
                </Box>
            )}
            <IconButton
                aria-label="search"
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "20%",
                }}
                onClick={() => {
                    const firstFoundResult = employeeList.find((em) =>
                        String(em.name)
                            .toLocaleLowerCase()
                            .includes(String(search).toLocaleLowerCase())
                    );
                    if (search && result !== 0 && firstFoundResult) {
                        document
                            .getElementById(`${firstFoundResult.id}`)
                            ?.parentElement?.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                    }
                }}
            >
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </Box>
    );
}
