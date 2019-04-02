import React from "react";
import {create} from "react-test-renderer";
import PageNotFound from "../../components/PageNotFound";

test("Testing PageNotFoundComponent", () => {
    const component = create(<PageNotFound/>);
    expect(component.toJSON()).toMatchSnapshot();
});