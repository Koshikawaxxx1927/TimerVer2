import Inputs from "./components/Inputs";
import AddButton from "./components/AddButton";
import { Container } from "@mui/material";
import Timer from "./components/Timer";

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Timer />
                <AddButton />
                <Inputs />
            </Container>
        </div>
    );
}

export default App;
