var express = require('express');
var router = express.Router();
const Todo = require('../models/todo')

/* GET home page. */
router.get('/', function (req, res, next) {
  const getData = Todo
  getData.find({})
    .then((data) => {
      res.render('index', { title: 'Express', todos: data });
    }).catch((err) => {
      console.log(err)
    })
});

router.post('/add', function (req, res, next) {
  const todoText = req.body.todo
  const todoBtn = req.body.addTodo

  if (todoBtn != undefined) {
    if (todoText.length > 0) {
      addTodo = new Todo({
        todo: todoText
      })

      addTodo.save().then(() => {
        res.redirect('/')
      }).catch((err) => {
        res.redirect('/')
      })
    } else {
      res.render('error', {
        message: 'Please fill in empty inputs'
      })
    }
  } else {
    res.render('index', {
      error: 'Butona tikla dumbuk'
    })
  }
});


router.get('/delete/:id', function (req, res, next) {
  console.log(req.params.id)
  const todoId = req.params.id
  const getTodo = Todo

  getTodo.findById(todoId).then((data) => {
    data.remove().then((data) => {
      return res.redirect('/')
    }).catch((err) => {
      console.log(err)
    })
  })
});


router.post('/finish/:id', function (req, res, next) {
  const id = req.params.id
  const getTodo = Todo
  const action = req.body.finished
  console.log(action)
  if (action) {
    getTodo.findOneAndUpdate({ _id: id }, { $set: { finished: false } }).then((data) => {
      return res.json(data)
    }).catch((err) => {
      return res.json(err)
    });
  } else {
    getTodo.findOneAndUpdate({ _id: id }, { $set: { finished: true } }).then((data) => {
      return res.json(data)
    }).catch((err) => {
      return res.json(err)
    })
  }


})

module.exports = router;
