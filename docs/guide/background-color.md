<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Background color
The property sets the background color of the component. If the background color is not set, then it is generated based on the username

| Prop name        | Type   | Default value |
|------------------|--------|---------------|
| background-color | String | -             |

## Code example

```vue
<template>
  <vue-avatar username="Some User" background-color="#1aa9bf" />
  <vue-avatar username="Some User" background-color="#000000" />
  <vue-avatar username="Some User" background-color="#ee0000" />

  <vue-avatar username="User Name" />
  <vue-avatar username="John Doe" />
  <vue-avatar username="Foo Bar" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
    <vue-avatar username="Some User" background-color="#1aa9bf" />
    <vue-avatar username="Some User" background-color="#000000" />
    <vue-avatar username="Some User" background-color="#ee0000" />
    <vue-avatar username="User Name" />
    <vue-avatar username="John Doe" />
    <vue-avatar username="Foo Bar" />
</div>
