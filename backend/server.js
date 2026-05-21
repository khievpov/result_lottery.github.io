const express = require('express')
const cors = require('cors')
const sql = require('mssql')
const app = express()
app.use(cors())
app.use(express.json())

const config = {
  user: 'quasar_lotteryapp',
  password: 'Password168*',
  server: 'localhost',
  database: 'resultappkh',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
}
app.get('/result', async (req, res) => {
  try {
    await sql.connect(config)
    const result = await sql.query('SELECT * FROM lottery_resultskh')
    res.json(result.recordset)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
