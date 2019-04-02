import React from "react";
import {create} from "react-test-renderer";
import Navigation from "../../../../components/home/partials/Navigation";
beforeEach(() => {
    localStorage.setItem('credentials', JSON.stringify({user: 'test@gmail.com'}));
});
test("Testing Navigation", () => {
    const component = create(<Navigation/>);
    const instance = component.getInstance();
});