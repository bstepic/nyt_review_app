import React from "react";
import { create } from "react-test-renderer";
import Login from "../../components/Login";

test("Login Component test", () => {
    const component = create(<Login />);
    const rootInstance = component.root;
    const form = rootInstance.findByType('Form');
    // form.props.onSubmit();
    // expect(rootInstance.submitForm)
});