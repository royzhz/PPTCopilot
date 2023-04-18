<template>
  <div class="container">
    <h1>ChatGPT聊天室</h1>
    <div class="chat-box-container">
      <chat-box></chat-box>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.chat-box-container {
  flex: 1;
  width: 100%;
  max-width: 600px;
}
</style>

<script>
import ChatBox from './common/ChatBox'

export default {
  components: {
    ChatBox,
  },
  name: 'ChatWithGpt',
}

</script>
