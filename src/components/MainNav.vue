<template>
  <header class="w-full text-sm">
    <div
      class="w-full px-8 fixed top-0 left-0 h-16 flex flex-nowrap items-center border border-b border-brand-grey-1"
    >
      <div class="flex h-full items-center">
        <a class="text-xl">{{ company }}</a>
      </div>
      <ul class="flex ml-16 items-center justify-between desktop-nav">
        <li
          v-for="(listName, index) in menuList"
          :key="index"
          class="ml-9 first:ml-0"
          data-test="main-nav-items"
        >
          {{ listName }}
        </li>
      </ul>
      <div class="ml-auto flex h-full items-center">
        <action-button
          v-if="!isLoggedIn"
          class="bg-brand-blue-1 text-white py-2 px-4 shadow-2xl hover:shadow-blue"
          text="Sign In"
          data-test="login-button"
          @click="loggedIn"
        />
        <user-image v-else data-test="user-profile" />
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import UserImage from "@/components/UserImage.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    UserImage,
  },
  data() {
    return {
      company: "Hussy Careers",
      menuList: [
        "Teams",
        "Locations",
        "Life at Hussy Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loggedIn() {
      this.isLoggedIn = true;
    },
  },
};
</script>
