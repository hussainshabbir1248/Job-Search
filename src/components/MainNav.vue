<template>
  <header class="w-full text-sm">
    <div
      class="w-full fixed top-0 left-0 h-16 flex flex-nowrap items-center border border-b border-brand-grey-1"
    >
      <div class="w-full flex h-full px-8 items-center">
        <a class="text-xl" href="/">{{ company }}</a>
        <h2 class="ml-8">
          Developed by: {{ author.firstName }} {{ author.lastName }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Hussy Career",
      author: {
        firstName: "Hussain",
        lastName: "Shabbir",
      },
    };
  },
};
</script>
