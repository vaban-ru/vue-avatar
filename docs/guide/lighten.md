<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Lighten
A factor by which the background color must be lightened to produce the font color. 

| Prop name | Type                        | Default value |
|-----------|-----------------------------|---------------|
| lighten   | Number between `[-200,200]` | `150`         |

## Code example

```vue
<template>
  <vue-avatar username="Some User" :lighten="10" />
  <vue-avatar username="Some User" :lighten="50" />
  <vue-avatar username="Some User" :lighten="100" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
  <vue-avatar username="Some User" :lighten="10" />
  <vue-avatar username="Some User" :lighten="50" />
  <vue-avatar username="Some User" :lighten="100" />
</div>
