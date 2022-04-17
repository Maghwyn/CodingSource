import { useRef, useState } from "react";

// const AuthenticatedApp = React.lazy(() => import('./auth/authenticatedApp'))
// const UnauthenticatedApp = React.lazy(() => import('./auth/unauthenticatedApp'))

const App = () => {
    const [user, setUser] = useState(null); // This variable will load the full application or not.
    const loading = useRef(true); // Trigger function once the first render is complete.
 
    return null;
}

export default App;