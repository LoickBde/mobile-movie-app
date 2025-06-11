import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Accueil", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Rechercher", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Sauvegardé", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profil", headerShown: false }}
      />
    </Tabs>
  );
};

export default Layout;
