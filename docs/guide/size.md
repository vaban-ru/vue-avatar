<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>
# Size
The property is needed to set the width and height of the component

| Prop name | Type   | Default value |
|-----------|--------|---------------|
| size      | Number | `50`          |

## Code example

```vue
<template>
  <vue-avatar username="Some User" :size="50" />
  <vue-avatar username="Some User" :size="100" />
  <vue-avatar username="Some User" :size="200" />
</template>
```
## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;align-items: flex-end">
<vue-avatar username="Some User" :size="50" />
  <vue-avatar username="Some User" :size="100" />
  <vue-avatar username="Some User" :size="200" />
</div>
