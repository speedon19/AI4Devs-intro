<template>
  <div class="reverse-string-container">
    <h1>Reverse String</h1>
    <input v-model="inputText" type="text" placeholder="Hello, welcome to AI4Devs" />
    <button @click="reverseString" class="reverse-button">Reverse &#x21bb;</button>
    <p class="reversed-text">{{ reversedText }}</p>
    <button @click="copyToClipboard" class="copy-button">Copy &#x1f4cb;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      reversedText: ''
    };
  },
  methods: {
    reverseString() {
      this.reversedText = this.inputText.split('').reverse().join('');
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.reversedText).then(
        () => {
          alert('Text copied to clipboard!');
        },
        () => {
          alert('Failed to copy text.');
        }
      );
    }
  }
};
</script>

<style scoped>
.reverse-string-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.reverse-button, .copy-button {
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.reverse-button:hover, .copy-button:hover {
  background-color: #0056b3;
}

p.reversed-text {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin: 20px 0;
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.copy-button {
  background-color: #6c757d;
}

.copy-button:hover {
  background-color: #5a6268;
}
</style>