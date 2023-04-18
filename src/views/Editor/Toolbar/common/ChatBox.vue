<template>
  <div class="chat-box">
    <div class="chat-history" ref="chatHistory">
      <div v-for="(message, index) in messages" :key="index" >
        <div class = "chat-container">
          <chat-message class = "chat-message"
              :sender-name="message.senderName"
              :message="message.message"
          ></chat-message>
        </div>
        <div class="separator" v-if="index < messages.length - 1"></div>

      </div>
    </div>
    <div class="chat-input">
      <input type="text" v-model="newMessage"  placeholder="输入消息">
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage'

export default {
  components: {
    ChatMessage,
  },
  data() {
    return {
      messages: [
        {
          senderName: 'Alice',
          message: '你好，Bob',
        },
        {
          senderName: 'Bob',
          message: '你好，Alice',
        },
      ],
      newMessage: '',
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({
          senderName: 'Alice',
          message: this.newMessage,
        })
        this.newMessage = ''
      }
    },
  },
}
</script>

<style>
.chat-box {
  position: relative;
  height: calc(100vh - 120px); /* 聊天框高度为屏幕高度的一部分 */
  overflow: hidden;
}

.chat-container {
  margin: 5px;
  background-color: white;
}

.chat-history {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px; /* 输入框高度 + 底部留白 */
  overflow-y: scroll;
}

.separator {
  height: 1px;
  background-color: #f5f5f5;
  margin: 10px 0;
}

.chat-input {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px; /* 输入框高度 */
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-input input {
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.chat-input button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>