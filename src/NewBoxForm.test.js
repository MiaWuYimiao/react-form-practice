import React from "react";
import {render} from "@testing-library/react"
import NewBoxForm from "./NewBoxForm";

it("render without crash", function() {
    render(<NewBoxForm  />);
})

it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})