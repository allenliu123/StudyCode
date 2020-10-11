// 鉴权服务器
const express = require('node_modules/express')
const jwt = require('node_modules/jsonwebtoken')
let fs = require("fs")

const app = express()

// 公钥私钥可以使用任何很多工具生成，也可以使用 crypto 用代码生成
let publicKey = fs.readFileSync('public.pem').toString()
let secretKey = fs.readFileSync('secret.key').toString()

app.get('/login', (req, res) => {
  // 数据库验证成功后
  const payload = {
    user_id: 1001,
    user_name: 'allen'
  }
  const refreshPayload = {
    user_id: 1001
  }
  let token = jwt.sign(payload, secretKey, { algorithm: 'RS256', expiresIn: '1min' })
  let refreshToken = jwt.sign(refreshPayload, secretKey, { algorithm: 'RS256', expiresIn: '1day' })
  // let token = jwt.sign(payload, 'my_secret_key')
  res.json({
    code: 200,
    message: 'success',
    data: {
      token: token,
      refresh_token: refreshToken
    }
  })
})

app.get('/refresh', (req, res) => {
  let refresh_token = req.query.refresh_token
  jwt.verify(refresh_token, publicKey, function(err, decoded) {
    if (err) {
      res.json({
        code: -1,
        message: 'error',
        data: err
      })
    } else {
      let user_id = decoded.user_id

      // 数据库查询

      const payload = {
        user_id: user_id,
        user_name: 'allen'
      }
      let token = jwt.sign(payload, secret, { algorithm: 'RS256', expiresIn: '1min' })
      res.json({
        code: 200,
        message: 'success',
        data: {
          token: token
        }
      })
    }
  })
})

app.listen(8080)