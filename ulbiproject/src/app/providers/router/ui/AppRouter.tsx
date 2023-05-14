import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    </Suspense>
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;