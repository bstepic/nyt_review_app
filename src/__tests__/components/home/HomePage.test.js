import React from "react";
import {create} from "react-test-renderer";
import HomePage from "../../../components/home/HomePage";

beforeEach(() => {
    localStorage.setItem('credentials', JSON.stringify({user: 'test@gmail.com'}));
});

test("Testing HomePage", () => {
    const component = create(<HomePage/>);
    const instance = component.getInstance();
    expect(instance.state.searchTermData).toBe(null);
});