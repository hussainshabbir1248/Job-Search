<template>
  <header class="w-full text-sm">
    <div
      class="w-full fixed top-0 left-0 h-16 flex flex-nowrap items-center border border-b border-brand-grey-1"
    >
      <div class="w-full flex h-full px-8 items-center">
        <a class="text-xl" href="/">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Hussy Careers",
    };
  },
};
</script>
