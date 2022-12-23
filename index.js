const express = require('express')
const port = 3000

app.get('/', (req, res) => {
  if(req.query.wait_time){
    setTimeout(() => {
        res.send('Howdy.')
    }, Number(req.query.wait_time))
   } else {
    res.send('Hello World!')
   }
})

app.listen(port, () => {
  console.log(`Howdy app listening on port ${port}`)
})
