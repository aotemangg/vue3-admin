<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.sidebarType"
  >
    <el-sub-menu v-for="(item, index) in menusList" :key="item.id" :index="item.id.toString()">
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        v-for="it in item.children"
        :key="it.id"
        :index="'/' + it.path"
        @click="savePath(it.path)"
      >
        <template #title>
            <el-icon>
            <component :is="icon"></component>
            </el-icon>
            <span>{{ $t(`menus.${it.path}`) }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')

const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menusList = ref([])
const initMenuList = async () => {
  menusList.value = await menuList()
}
initMenuList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}

watch(
  route,
  () => {
    defaultActive.value = sessionStorage.getItem('path')
    initMenuList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped></style>
