<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Color
If you do not want the text color to depend on the background color, then using this property you can set the text color in the component

| Prop name | Type   | Default value |
|-----------|--------|---------------|
| color     | String | -             |

## Code example

```vue
<template>
  <vue-avatar username="Some User" color="#fff" />
  <vue-avatar username="Some User" color="#ee0000" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
  <vue-avatar username="Some User" color="#fff" />
  <vue-avatar username="Some User" color="#ee0000" />
</div>
