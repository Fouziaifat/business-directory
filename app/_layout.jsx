import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
import LoginScreen from '../components/LoginScreen';
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  useFonts({
    Outfit: require("../assets/fonts/Outfit-Black.ttf"),
    Outfitbold: require("../assets/fonts/Outfit-Bold.ttf"),
    Outfitmedium: require("../assets/fonts/Outfit-Medium.ttf"),
    Outfitlight: require("../assets/fonts/Outfit-Light.ttf"),
  });
  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
      <Stack screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </SignedIn>
      <SignedOut>
       <LoginScreen/>
      </SignedOut>
      
    </ClerkProvider>
  );
}
