import React, { useContext, useEffect } from "react";
import EmployeeList from "./EmployeeList";

export default function Home() {
  return (
    <>
      <EmployeeList title={"Employee List"} />
    </>
  );
}
