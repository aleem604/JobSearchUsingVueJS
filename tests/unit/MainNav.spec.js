import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

// We recommend installing an extension to run jest tests.

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    console.log(wrapper.html());
  });
});
