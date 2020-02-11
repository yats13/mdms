<template>
  <div>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">
          MD
        </h1>
        <nav class="Header__Menu">
          <nuxt-link v-for="(page, key) in pages[current__lang]" :to="localePath(page.slug)" :key="key">{{ page.name }}</nuxt-link>
        </nav>
        <nav class="Languages__Menu">

        </nav>
      </div>

    </header>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    data(){
      return{
         pages:{
           "en": [
             {"name":"Home", "slug":"index"},
             {"name":"About", "slug":"about"},
             {"name":"Contact", "slug":"contact"}
           ],
           "ru": [
             {"name":"Home Ru", "slug":"index"},
             {"name":"About Ru", "slug":"about"},
             {"name":"Contact Ru", "slug":"contact"}
           ]
         },
        current__lang: this.$i18n.locale,
      }
    },
    methods:{
    }
  }
</script>

<style lang="scss">
  $primary-color:#104D83;
  $secondary-color:#EEB61B;
  $light-color: #a3a3a3;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic-ext');
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body {
    background-color: #fff;
    color: #2e2f30;
    letter-spacing: 0.5px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    color: $primary-color;
    height: 100vh;
    margin: 0;
  }

  a{
    text-decoration: none;
      color: $light-color;
    &:active{
      color: $secondary-color;
    }
  }

  button{
    border: none;
    background: transparent;
    text-transform: capitalize;
    &:hover{
      cursor:pointer
    }
  }

  .container {
    width: 75%;
    margin: 0 auto;
  }
  .Header {
    .container{
      display: flex;
      justify-content: space-between;
    }
    &__Menu{
      display: flex;
      justify-content: space-between;
      a{
        display: block;
        padding: 1em 2em;
        text-transform: capitalize;
        &:hover{
          color: $primary-color;
        }
        &.nuxt-link-exact-active{
          color: $secondary-color
        }
      }
    }
  }

  .Languages__Menu .Item{
    margin-right: 1em;
  }

</style>
