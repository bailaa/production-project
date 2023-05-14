import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "../pages/AboutPage/ui";
import { MainPage } from "../pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    )
}

export default App;