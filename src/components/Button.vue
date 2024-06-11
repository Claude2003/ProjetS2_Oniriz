<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'dark' | 'outlined'
    size?: 'small' | 'medium' | 'large'
    url?: string
    text?: string
    icon?: string | object | undefined
  }>(),
  {
    variant: 'default',
    size: 'medium'
  }
)
const variantClass = {
  default: 'border-violet-300 bg-violet-300',
  dark: 'border border-violet-500 bg-violet-500 text-white rounded-xl text-base',
  outlined: 'border-indigo-200 bg-red'
}
const sizeClass = {
  small: 'px-4 py-2.5 rounded-xl text-base',
  medium: 'px-12 py-3 text-base rounded-xl text-black font-bold ',
  large: 'px-32 py-4 rounded-xl text-base text-white font-bold'
}
</script>

<template>
  <RouterLink
    class="inline-flex items-center gap-2 border-2 font-bold rounded-lg transition duration-300 ease-in-out"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
    :to="`${url}`"
  >
    <component
      v-if="props.icon"
      :is="props.icon"
      :class="props.variant === 'dark' ? 'stroke-white' : 'stroke-indigo-500'"
      class="size-5"
    />
    {{ text }}
  </RouterLink>
</template>
