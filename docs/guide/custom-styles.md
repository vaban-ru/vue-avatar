<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Custom styles
The property allows you to overwrite any component styles

| Prop name     | Type   | Default value |
|---------------|--------|---------------|
| custom-styles | Object | -             |

## Code example

```vue
<template>
  <vue-avatar username="Some User" :custom-styles="{fontSize: '10px'}" />
  <vue-avatar username="Some User" :custom-styles="{color: 'red'}" />
  <vue-avatar username="Some User" :custom-styles="{borderRadius: '10px'}" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
    <vue-avatar username="Some User" :custom-styles="{fontSize: '10px'}" />
    <vue-avatar username="Some User" :custom-styles="{color: 'red'}" />
    <vue-avatar username="Some User" :custom-styles="{borderRadius: '10px'}" />
</div>
