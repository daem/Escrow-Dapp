import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CreateContractForm from "../components/CreateContractForm";

export default function Index() {
    return (
        <Container maxWidth="sm">
            <Box m={1}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Excrow Dapp
                </Typography>
            </Box>
            <CreateContractForm />
        </Container>
    );
}
