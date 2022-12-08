<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Background color
The property sets the background color of the component

| Prop name        | Type   | Default value   |
|------------------|--------|-----------------|
| background-color | String | `#42b883`       |

## Code example

```vue
<template>
  <vue-avatar username="Some User" background-color="#1aa9bf" />
  <vue-avatar username="Some User" background-color="#000000" />
  <vue-avatar username="Some User" background-color="#ee0000" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
  <vue-avatar username="Some User" background-color="#1aa9bf" />
  <vue-avatar username="Some User" background-color="#000000" />
  <vue-avatar username="Some User" background-color="#ee0000" />
</div>
