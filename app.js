const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.listen(3000, () => {
    console.log("ポート3000でサーバーを起動しました");
});