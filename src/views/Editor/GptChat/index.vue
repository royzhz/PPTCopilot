<template>
  <div class="GptChat">
    <div class="resize-handler" @mousedown="$event => resize($event)"></div>

    <div class="GptChat_content">
      <ul v-if="history_ls.length > 0">
        <li class="my_li_tittle">历史记录</li>
        <li class="my_li" v-for="history in history_ls" :key="history">
          {{ history }}
        </li>
      </ul>
      <textarea :value="gptinput" placeholder="点击输入您的编辑需求" @input="$event => handleInput($event)"></textarea>
      <button class="my_button" @click="commitInput">提交</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/store'

const history_ls = ref<string[]>([])

const props = defineProps({
  height: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits<{
  (event: 'update:height', payload: number): void
}>()

const slidesStore = useSlidesStore()
const { currentSlide } = storeToRefs(slidesStore)

const gptinput = computed(() => currentSlide.value?.gptinput || '')

slidesStore.request_update_slides('请帮我把这个ppt修改为论语主题')
const commitInput = () => {
  // 功能：向后端提交输入的命令
  // 说明：点击按钮出发，输入不为空才提交，提交后清空输入框
  if (gptinput.value === '') return
  history_ls.value.push(gptinput.value)// 记录历史命令
  slidesStore.updateSlide({ gptinput: '' })
}

const handleInput = (e: Event) => {
  const value = (e.target as HTMLTextAreaElement).value
  slidesStore.updateSlide({ gptinput: value })
}

const resize = (e: MouseEvent) => {
  let isMouseDown = true
  const startPageY = e.pageY
  const originHeight = props.height

  document.onmousemove = e => {
    if (!isMouseDown) return

    const currentPageY = e.pageY

    const moveY = currentPageY - startPageY
    let newHeight = -moveY + originHeight

    if (newHeight < 50) newHeight = 50
    if (newHeight > 160) newHeight = 160

    emit('update:height', newHeight)
  }

  document.onmouseup = () => {
    isMouseDown = false
    document.onmousemove = null
    document.onmouseup = null
  }
}
</script>

<style lang="scss" scoped>
.GptChat {
  position: relative;
  border-top: 1px solid $borderColor;
  background-color: $lightGray;
  line-height: 1.5;

  .GptChat_content {
    overflow-y: auto;
    height: 100%; //设置行高，为了能显示垂直滚动条
  }

  .my_li {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgb(165, 218, 154);
  }

  .my_li_tittle {
    background-color: rgb(146, 191, 250);
    font-weight: bold;
  }

  textarea {
    // 调整宽高，给按钮留下空间
    width: 80%;
    height: 80%;
    overflow-y: auto;
    resize: none;
    border: 0;
    outline: 0;
    padding: 8px;
    font-size: 12px;
    background-color: transparent;

    // @include absolute-0();
  }
}

.resize-handler {
  height: 7px;
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  cursor: n-resize;
  z-index: 2;
}

.my_button {
	width: 200px; 
	height: 40px;
	border-width: 0px;
	border-radius: 3px;
	background: rgb(71, 137, 224);
	cursor: pointer;
	outline: none;
	color: white;
	font-size: 17px;
  position: relative;
	right: 0;
	bottom: 10px;
}
.my_button:hover{ 
  background: rgb(140, 178, 228);
}
</style>