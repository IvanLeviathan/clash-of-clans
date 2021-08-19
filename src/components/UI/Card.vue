<template>
  <div class="card">
    <div class="card-img__wrapper" v-if="imgUrl">
      <img :src="imgUrl" :alt="title" class="card-img">
    </div>
    <span class="card-name">{{name}}</span>
    <span class="card-title">{{title}}</span>
    <div class="card-body">
      <slot name="body"></slot>
      <router-link
        v-if="link"
        class="link"
        style="display:block; margin-top: 10px;"
        :to="link"
      >See more</router-link>
    </div>
    <slot name="footer"></slot>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>
