import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "../pages/AboutPage/ui";
import { MainPage } from "../pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App;