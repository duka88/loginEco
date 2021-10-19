<template>
  <header class="header">
    <div class="header__wrap">
      <figure class="header__logo">
        <img src="../../assets/img/logo.png" alt="logo" />
      </figure>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact us</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
