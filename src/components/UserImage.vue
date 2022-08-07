<template>
  <img :src="imageLink" :alt="imageAlt" class="border rounded-full h-10" />
</template>

<script>
export default {
  data() {
    return {
      imageLink: "https://randomuser.me/api/portraits/men/75.jpg",
      imageAlt: "User Image",
    };
  },
};
</script>
