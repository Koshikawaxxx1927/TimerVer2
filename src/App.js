import Inputs from "./components/Inputs";
import AddButton from "./components/AddButton";
import { Container } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <AddButton />
                <Inputs />
            </Container>
        </div>
    );
}

export default App;
