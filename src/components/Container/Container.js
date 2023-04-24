import { Container } from "@mui/material";

const ControlledContainer = ({children, style}) => {
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}

export default ControlledContainer