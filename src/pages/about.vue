<template>
  <ul>
    <li v-for="item in list" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      list: [
        "Настройка шаблона Vue-CLI",
        "Настройка общего конфига",
        "Установка и настройка Vue-router 3",
        "Перерисовка без перезагрузки страницы",
        "Обработка 404 страниц"
      ]
    }
  }
}
</script>
