<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/houses" exact>Houses</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/">ElHouses</router-link>
      </el-menu-item>
    </el-menu>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
