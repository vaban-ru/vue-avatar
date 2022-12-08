<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Border radius
The property sets the fillet radius of the component

| Prop name     | Type   | Default value |
|---------------|--------|---------------|
| border-radius | String | `100%`        |

## Code example

```vue
<template>
  <vue-avatar username="Some User" border-radius="10%" />
  <vue-avatar username="Some User" border-radius="50%" />
  <vue-avatar username="Some User" border-radius="16px" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
    <vue-avatar username="Some User" border-radius="10%" />
    <vue-avatar username="Some User" border-radius="50%" />
    <vue-avatar username="Some User" border-radius="16px" />
</div>
