import Routes from "./Routes";
import GlobalStyles from './assets/styles/global';

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;