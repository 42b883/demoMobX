/* eslint-env test */

import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "mobx-react";
import { observable, action, decorate } from "mobx";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Contacts from "./components/Contacts.jsx";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  // const contactsStore = new DecoratedContactsStore();
  const props = {
    ContactsStore: {
      contacts: [
        { id: 1, name: "Kelsey", username: "@kellly" },
        { id: 2, name: "John", username: "@danJ" }
      ]
    }
  };
  const wrapper = shallow(<Contacts {...props} />);

  expect(wrapper).toMatchSnapshot();
});

it("without component", () => {
  const wrapper = shallow(
    <Provider>
      <Contacts />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
