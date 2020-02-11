<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">
        {{ $t('contact.title') }}
      </h1>
      <p>{{ $t('contact.introduction') }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return { title: this.$t('contact.title') }
    }
  }
</script>
