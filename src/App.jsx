import React from "react";
import "./App.css";
import { MainPage } from "./pages";
import { Layout } from "./components";
import { Provider } from "react-redux";
import { store } from "./__data__/store";

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <MainPage />
            </Layout>
        </Provider>
    );
}

export default App;
