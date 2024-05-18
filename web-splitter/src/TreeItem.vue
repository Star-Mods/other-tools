<script setup lang="ts">
  const props = defineProps(['item'])
  const emit = defineEmits(['make-folder','add-item'])

  import { ref } from 'vue'

  let isOpen = ref(false)
  let isFolder = props.item.children && props.item.children.length;

  function makeFolder() {
    if (!isFolder) {
      emit("make-folder", props.item);
      isOpen.value = true;
    }
  }
  function toggle() {
    if (isFolder) {
      isOpen.value = !isOpen.value;
    }
  }
</script>

<template>
    <li>
      <div :class="{bold: isFolder}" @click="toggle">
        <!--      @dblclick="makeFolder"-->

        <span v-if="isFolder">
          <img v-if="props.item.icon" class="item-icon" :src="'http://scassets.hometlt.ru/icons/' + props.item.icon + '.png'"/><span class="item-name">{{ props.item.name }}</span>
          [{{ isOpen ? '-' : '+' }}]
        </span>
        <details v-if="!isFolder && props.item.data">
          <summary><img v-if="props.item.icon" class="item-icon" :src="'http://scassets.hometlt.ru/icons/' + props.item.icon + '.png'"/><span class="item-name">{{ props.item.name }}</span></summary>
          <pre>{{ JSON.stringify(props.item.data, null, 2) }}</pre>
        </details>
      </div>
      <ul v-show="isOpen" v-if="isFolder">
        <tree-item
            class="item"
            v-for="(child, index) in props.item.children"
            :key="index"
            :item="child"
            @make-folder="$emit('make-folder', $event)"
            @add-item="$emit('add-item', $event)"
        ></tree-item>
<!--        <li class="add" @click="$emit('add-item', props.item)">+</li>-->
      </ul>
    </li>
</template>

<style scoped>

  .item-name{
    line-height: 22px;
    display: inline-block;
    vertical-align: middle;
  }
  .item-icon{
    line-height: 22px;
    width: 22px;
    height: 22px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
  }
  pre{

    font-size: 10px;
    line-height: 10px;
  }
</style>