import React from "react";
import {fireEvent, render, wait} from "@testing-library/react"
import BoxList from "./BoxList";

it("render without crash", function() {
    render(<BoxList  />);
})

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

function addBox(boxList, height=2, width=2, color="peachpuff") {
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const backgroundInput = boxList.getByLabelText("BackgroundColor:");
    fireEvent.change(heightInput, { target: {value:height}});
    fireEvent.change(widthInput, { target: {value:width}});
    fireEvent.change(backgroundInput, { target: {value:color}});
    const button = boxList.getByText("Add");
    fireEvent.click(button);
}

it("can add a new box", function() {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addBox(boxList);

    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 2px;
        height: 2px;
        background-color: peachpuff;
    `)
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
})