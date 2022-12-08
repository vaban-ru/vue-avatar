<script setup>
import VueAvatar from '../../src/VueAvatar.vue'
</script>

# Username

This property is required to display initials in the component. The **first three** capital letters from the sentence will be rendered in the component

| Prop name | Type   | Default value    |
|-----------|--------|------------------|
| username  | String | `Vue Avatar`     |

## Code example

```vue
<template>
  <vue-avatar username="Some User" />
  <vue-avatar username="John Doe" />
  <vue-avatar username="SM" />
  <vue-avatar username="John Doe-Sam" />
</template>
```

## Demo
<div style="padding: 16px 0; display: flex;gap: 8px;">
<vue-avatar username="Some User" />
<vue-avatar username="John Doe" />
<vue-avatar username="SM" />
<vue-avatar username="John Doe-Sam" />
</div>
