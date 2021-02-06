<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">FindJobs</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link :to="localePath('/')" class="nav-link">
              {{ $t('home') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/about')" class="nav-link">
              {{ $t('about') }}
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link :to="switchLocalePath('en')">
          <button class="btn btn-light">{{ $t('language.english') }}</button>
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('pt')">
          <button class="btn btn-light">{{ $t('language.portuguese') }}</button>
        </nuxt-link>
      </div>
    </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>