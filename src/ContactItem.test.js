/* eslint-env test */

import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "mobx-react";
import { observable, action, decorate } from "mobx";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ContactItem from "./components/ContactItem.jsx";

configure({ adapter: new Adapter() });

it("renders each contact item without crashing", () => {
  const props = {
    ContactsStore: {
      name: "Yauhen",
      phone: "23979247",
      website: "www.tt.co",
      email: "tldrl@mail.us"
    }
  };
  const wrapper = shallow(<ContactItem {...props} />);

  expect(wrapper).toMatchSnapshot();
});
it("check count of <p></p>", () => {
  const props = {
    ContactsStore: {
      name: "Yauhen",
      phone: "23979247",
      website: "www.tt.co",
      email: "tldrl@mail.us",
      home: "Ottawa"
    }
  };
  const wrapper = mount(<ContactItem {...props} />);
  expect(wrapper.find("p").length).toEqual(5);
});
