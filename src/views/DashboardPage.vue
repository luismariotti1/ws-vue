<template>
  <div class="container">
    <h1>TIC-TAC-TOE</h1>
    <div v-if="gameStarted">
      <div
        class="row"
        v-for="(row, index) in this.board"
        :key="row"
        :id="index"
      >
        <div
          :id="index"
          class="column"
          v-for="(column, index) in row"
          :key="column"
          @click="play($event)"
        >
          <div>{{ column }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div>
        <span class="input-label">Type your nick name</span>
        <input class="input" type="text" v-model="playerName" />
      </div>
      <button class="button" @click="joinGame">Join Game</button>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  name: "DashboardPage",
  data() {
    return {
      gameStarted: false,
      board: [],
      playerName: "Luis",
      player: "",
    };
  },
  mounted() {
    this.socket = io("http://localhost:80");
    this.socket.on("connect", () => {
      console.log("connected");
    });
    this.socket.on("updateBoard", (board) => {
      this.board = board;
    });
  },
  methods: {
    async joinGame() {
      await new Promise((resolve) => {
        this.socket.emit("joinGame", this.playerName, (player) => {
          this.player = player;
          resolve();
        });
      });
      this.gameStarted = true;
    },
    play(event) {
      console.log("row", event.target.id);
      console.log("column", event.target.parentElement.id);
      this.socket.emit(
        "makeMove",
        {
          row: event.target.id,
          column: event.target.parentElement.id,
          player: this.player,
        },
        (board) => {
          this.board = board;
        }
      );
    },
  },
};
</script>
<style lang="css">
.row {
  display: flex;
}
.column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.column:hover {
  background-color: #f1f1f1;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.input {
  width: 200px;
  height: 30px;
  margin: 10px;
  display: block;
}
.input-label {
  margin: 10px;
}
</style>
