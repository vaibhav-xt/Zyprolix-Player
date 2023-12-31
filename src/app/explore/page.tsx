"use client";
import React, { useEffect, useState } from 'react';
import { Box, Button, InputAdornment, InputBase, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Layout from '../components/Layout';
import ExploreList from '../components/explore/ExploreList';
import { useSearchContext } from '../context/gloablConext';

export default function Page() {
    const [form, setForm] = useState<string>("");
    const { setSearch, user } = useSearchContext()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(form)
    };

    useEffect(() => {
        return () => setSearch("")
    }, [])

    return (
        <Layout>
            <Box>
                <Paper
                    component="form"
                    onSubmit={handleSearch}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "default",
                        p: 1,
                        backgroundColor: "#10141f",
                        border: "none"
                    }}
                >
                    <InputBase
                        placeholder="Explore as much as you can..."
                        sx={{
                            ml: 1,
                            flex: 1,
                            color: "white",
                            border: "none"
                        }}
                        value={form}
                        onChange={(e) => setForm(e.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon htmlColor="white" />
                            </InputAdornment>
                        }
                    />
                    {user && <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>}
                </Paper>
            </Box>
            <Box py={2} px={4}>
                <Box width="100%">
                    <Box width="100%">
                        <ExploreList />
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}
