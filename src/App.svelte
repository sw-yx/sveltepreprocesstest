<script lang="typescript">
  import { link } from "svelte-routing";
  export const foo: string = "foo"
</script>


<template>
  <a href="/" use:link class="navbar-item">
    Home
  </a>
  <a href="/about" use:link class="navbar-item">
    About Us
  </a>
</template>