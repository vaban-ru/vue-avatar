<template>
  <div :style="avatarStyles" class="vue-avatar">
    <template v-if="!slots.default && !props.imgSrc">
      {{ parsedUserName }}
    </template>
    <img v-if="imgSrc && imgSrc.length" :src="props.imgSrc" :alt="imgAlt" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

/**
 * Component props interface
 */
export interface IProps {
  username?: string;
  size?: number;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  lighten?: number;
  imgSrc?: string;
  imgAlt?: string;
}

/**
 * Component props object
 */
const props = withDefaults(defineProps<IProps>(), {
  username: "Vue Avatar",
  size: 50,
  borderRadius: "100%",
  lighten: 150,
});

/**
 * Computed return uppercase letters from username
 */
const parsedUserName = computed(() => {
  return props.username
    .match(/[A-ZА-ЯЁё]/g)
    ?.slice(0, 3)
    .join("");
});

/**
 * Computed return components styles
 */
const avatarStyles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    borderRadius: props.borderRadius,
    fontSize: `${props.size / 2.2}px`,
    backgroundColor: backgroundColor.value,
    color: props.color || lightenColor(backgroundColor.value, props.lighten),
  };
});

/**
 * This function takes colors in hex format (i.e. #F06D06,
 * with or without hash) and lightens or darkens them with a value.
 * @param backgroundColor
 * @param amt
 */
const lightenColor = (backgroundColor: string, amt: number) => {
  // From https://css-tricks.com/snippets/javascript/lighten-darken-color/
  let usePound = false;
  if (backgroundColor[0] === "#") {
    backgroundColor = backgroundColor.slice(1);
    usePound = true;
  }
  const num = parseInt(backgroundColor, 16);
  let r = (num >> 16) + amt;
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }
  let b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }
  let g = (num & 0x0000ff) + amt;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

/**
 * Generate background color depends on username
 */
const backgroundColor = computed(() => {
  if (props.backgroundColor) {
    return props.backgroundColor;
  }
  let hash = 0;
  for (let i = 0; i < props.username.length; i++) {
    hash = props.username.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
});

const slots = useSlots();
</script>

<style lang="scss" scoped>
.vue-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  &:deep {
    img,
    picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
}
</style>
