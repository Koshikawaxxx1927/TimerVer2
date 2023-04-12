import Input from "./components/Input";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddButton from "./components/AddButton";

function App() {
    return (
        <div className="App">
            <div className="container-sm">
                <AddButton />
                <Input />
                <Input />
            </div>
        </div>
    );
}

export default App;
