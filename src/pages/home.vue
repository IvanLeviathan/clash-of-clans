<template>
  <div>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <Card
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            {{item.descr}}
          </template>
          <template v-slot:footer>
            <CardStats :stats="!!item.info ? item.info : []"/>
          </template>
        </Card>
      </slide>

      <!-- addons -->
      <template #addons>
        <navigation/>
      </template>
    </carousel>


  </div>
</template>

<script>
import items from "@/seeders/items.js";
import Card from "@/components/UI/Card"
import CardStats from "@/components/UI/CardStats";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Navigation} from 'vue3-carousel';

export default {
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    }
  }
}
</script>
