<template>
  <div class="chat-message" :class="{ 'left': senderName === 'ChatGpt', 'right': senderName !== 'ChatGpt' }">
    <div class="content">
      <div class="sender">{{ senderName }}</div>
      <div class="text">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    senderName: String,
    message: String,
  },
}
</script>

<style>
.chat-message {
  width: 100%;
  box-sizing: border-box;
}


.content {
  display: flex;
  flex-direction: column;
}

.sender {
  font-weight: bold;
}

.text {
  margin-top: 5px;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}
</style>