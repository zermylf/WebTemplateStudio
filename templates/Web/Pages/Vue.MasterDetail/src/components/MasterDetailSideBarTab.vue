﻿<template>
  <button
    class="list-group-item list-group-item-action styles.sidebarText"
    type="button"
    @click="$emit('selectSampleOrder', sampleOrder)"
  >
    <img class="mr-3" :src="sampleOrder.imageSrc ? sampleOrder.imageSrc : imgGreyAvatar" alt="Default Grey Avatar" />
    {{sampleOrder.title}}
  </button>
</template>

<script>
import imgGreyAvatar from '../assets/GreyAvatar.svg';
export default {
  name: "MasterDetailSideBarTab",
  props: {
    sampleOrder: {
      type: Object,
      required: true
    }
  },
  data (){
    return {
      imgGreyAvatar
    }
  }
};
</script>

<style scoped>
.sidebarText {
  font-weight: 500;
}
</style>
