var express = require('express');
var router = express.Router();
//const cors = require('cors'); // corsミドルウェアを追加
//require('dotenv').config();


// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = 
const client = new MongoClient(uri);

// corsミドルウェアを使用
//router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;