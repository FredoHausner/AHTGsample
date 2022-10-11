import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomePage} from "./src/Pages/HomePage";
import {EditPage} from "./src/Pages/EditPage";
import {CreatePage} from "./src/Pages/CreatePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditPage"
          component={EditPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePage"
          component={CreatePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
