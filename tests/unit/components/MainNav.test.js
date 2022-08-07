import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";
import { isSlotOutlet } from "@vue/compiler-core";

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

  describe("When User logged out", () => {
    it("Display log in component", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='user-profile'");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("When User logged In", () => {
    it("Display User Profile", async () => {
      const wrapper = mount(MainNav);
      let loginButton = wrapper.find("[data-test='login-button']");
      let profileImage = wrapper.find("[data-test='user-profile'");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
      await loginButton.trigger("click");
      profileImage = wrapper.find("[data-test='user-profile']");
      loginButton = wrapper.find("[data-test='login-button']");
      expect(profileImage.exists()).toBe(true);
      expect(loginButton.exists()).toBe(false);
    });
  });
});
