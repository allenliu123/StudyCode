// 业务服务器
const express = require('express')
const jwt = require('jsonwebtoken')
let fs = require("fs")

const app = express()

// 公钥私钥可以使用任何很多工具生成，也可以使用 crypto 用代码生成
let publicKey = fs.readFileSync('public.pem').toString()

app.get('/verify', (req, res) => {
  let token = req.query.token
  jwt.verify(token, publicKey, function(err, decoded) {
    if (err) {
      res.json({
        code: -1,
        message: 'error',
        data: err
      })
    } else {
      res.json({
        code: 200,
        message: 'success',
        data: decoded
      })
    }
  })
})

app.listen(8081)