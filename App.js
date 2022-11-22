import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Navigation} from "./src/component/Navigation";
import { AuthProvider} from "./src/context/AuthContext";
import {StatusBar} from "expo-status-bar";

const App = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style={"auto"}/>
          <AuthProvider>
              <Navigation/>
          </AuthProvider>
      </GestureHandlerRootView>
  );
}

export default App;
