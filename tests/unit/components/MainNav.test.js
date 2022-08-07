import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", function () {
  it("Display company's name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Hussy Careers");
  });
  it("Display menu items for nav", () => {
    const wrapper = mount(MainNav);
    const navItems = wrapper.findAll("[data-test='main-nav-items']");
    const navItemsText = navItems.map((item) => item.text());
    expect(navItemsText).toEqual([
      "Teams",
      "Locations",
      "Life at Hussy Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
