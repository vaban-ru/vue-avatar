<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Image
There are 2 ways to use an image in a component

## Image Src & Image Alt
When using these properties, the component itself will display images

| Prop name | Type   | Default value |
|-----------|--------|---------------|
| img-src   | String | -             |
| img-alt   | String | -             |

### Code example

```vue
<template>
  <vue-avatar 
      :size="100" 
      img-src="https://picsum.photos/200" 
      img-alt="Some image alt" 
  />
</template>
```

### Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
    <vue-avatar :size="100" img-src="https://picsum.photos/200" img-alt="Some image alt" />
</div>

## Slot
You can insert an image directly into a component using a slot

### Code example

```vue
<template>
  <vue-avatar :size="100">
    <img src="https://picsum.photos/200" alt="Some image alt">
  </vue-avatar>
  <vue-avatar :size="100">
    <picture>
      <img src="https://picsum.photos/200" alt="Some image alt">
    </picture>
  </vue-avatar>
</template>
```
### Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
  <vue-avatar :size="100">
    <img src="https://picsum.photos/200" alt="Some image alt">
  </vue-avatar>
  <vue-avatar :size="100">
    <picture>
      <img src="https://picsum.photos/200" alt="Some image alt">
    </picture>
  </vue-avatar>
</div>
