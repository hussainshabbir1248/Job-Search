import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", function () {
  it("Display company's name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Hussy Careers");
  });
});
