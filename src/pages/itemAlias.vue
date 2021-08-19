<template>
  <div v-if="item" class="wrapper-person">
    <div>
      <img :src="item.img" :alt="item.descr"/>
      <h1 style="color: #fff;" class="title">{{item.title}}</h1>
      <p>{{item.descr}}</p>
      <div class="card-stats">
          <div
            v-for="(stat,index) in item.info"
            :key="index"
            class="one-third"
          >
            <div class="stat-value">{{stat.value}}</div>
            <div class="stat">{{stat.title}}</div>
          </div>
        </div>
      <br/>
      <div>
        <router-link class="btn btnPrimary" to="/">Back to home</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import items from "@/seeders/items.js";
export default {
  data () {
    return {
      item: null
    }
  },
  created(){
    const alias = this.$route.params.itemAlias;
    const item = items.find(el => el.alias === alias);

    if(!item)
      this.$router.push('/404');
    else
      this.item = item;

  }
}
</script>

<style lang="scss">
.wrapper-person{
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  .card-stats{
    border-radius: 14px;
    margin: 20px 0;
  }
}
</style>
