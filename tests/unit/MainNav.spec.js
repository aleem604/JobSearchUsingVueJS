import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

// We recommend installing an extension to run jest tests.

describe("MainNav", () => {
  it("displays company name", () => {
    const companyName = "Super Job Search";
    const wrapper = mount(MainNav, {
      data() {
        return {
          company: companyName,
        };
      },
    });
    expect(wrapper.text()).toContain(companyName);
  });
});
