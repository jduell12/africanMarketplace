import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders", () => {
  app = render(<App />);
  console.log(app);
});
