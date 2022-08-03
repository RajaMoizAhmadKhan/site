import React from "react";
import DataArray from "./DataArray";
import Card from "./Cards";

export default function Home() {
  return (
    <div className="app">
      {DataArray.map((value) => {
        return <Card value={value} />;
      })}
    </div>
  );
}
