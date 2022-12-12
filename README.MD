# Vue Avatar
![Size](https://img.shields.io/bundlephobia/minzip/@webzlodimir/vue-avatar)
![Downloads](https://img.shields.io/npm/dt/@webzlodimir/vue-avatar)
![Version](https://img.shields.io/npm/v/@webzlodimir/vue-avatar)

Simple and easy to use avatar component for Vue 3

![DemoImg](https://vaban.ru/demo.png)

- [DOCS](https://vaban-ru.github.io/vue-avatar/)
- [PLAYGROUND](https://codesandbox.io/s/webzlodimir-vue-avatar-jf3ipd?file=/src/App.vue)

## Install

### Yarn

```
yarn add @webzlodimir/vue-avatar
```

### Npm

```
npm i @webzlodimir/vue-avatar
```

## Use

### Vue 3

Just import component and styles in `script` section

```vue
<script setup>
  import VueAvatar from "@webzlodimir/vue-avatar";
  import "@webzlodimir/vue-avatar/dist/style.css";
</script>
```

And use it in `template` tag

```vue
<template>
  <vue-avatar username="Simple User" />
</template>
```

## Develop

To start develop server with demo use command

```
yarn demo
```
or
```
npm run demo
```

To start develop docs, use command

```
yarn docs:dev
```
or
```
npm run docs:dev
```
