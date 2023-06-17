import React from "react";

import { Upgrade } from "@layouts";
import weaponData from "./weapon.json";

export default function App() {
  const { name, description, image, basicPrice, upgrades } = weaponData;

  return (
    <Upgrade
      name={name}
      description={description}
      image={image}
      basicPrice={basicPrice}
      upgradesList={upgrades}
    />
  );
}