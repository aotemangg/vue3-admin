<template>
    <div class="navbar">
        <hamburger-icon></hamburger-icon>
        <breadcrumb-vue></breadcrumb-vue>
        <div class="navbar-right">
            <driver-icon class="navbar-item"></driver-icon>
            <screen-full class="navbar-item"></screen-full>
            <lang-vue class="navbar-item"></lang-vue>
            <avatar-vue class="navbar-item"></avatar-vue>
        </div>
    </div>
</template>

<script setup>
import HamburgerIcon from './components/HamburgerIcon.vue'
import BreadcrumbVue from './components/BreadcrumbVue.vue'
import AvatarVue from './components/AvatarVue.vue'
import LangVue from './components/LangVue.vue'
import ScreenFull from './components/ScreenFull.vue'
import DriverIcon from './components/DriverIcon'
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
