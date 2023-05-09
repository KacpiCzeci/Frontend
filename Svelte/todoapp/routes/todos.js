const { Router } = require('express');
const Todo = require('../models/Todo');

const router = Router();

router.get("/", (req, res) => {
    Todo.find({})
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.send(err);
    });
});
  
router.get("/:todo_id", async (req, res) => {
    Todo.find({
        _id: req.params.todo_id,
      }).then((todos) => {
          res.json(todos);
        }
      ).catch((err) => {
          res.send(err);
        }
      )
});
  
router.post("/", async (req, res) => {
  console.log(req);
    Todo.create({
        text: req.body.text,
        done: false
      }).then(() => {
        Todo.find({}).then((todos) => {
          res.json(todos);
        }).catch((err) => {
          res.send(err);
        });
      }).catch((err) => {
        res.send(err);
      });
});
  
router.put("/:todo_id", async (req, res) => {
    Todo.findByIdAndUpdate(
      req.params.todo_id,
      {
        text: req.body.text,
        done: req.body.done
      },
      {
        new: false
      }).then(() => {
        Todo.find({}).then((todos) => {
          res.json(todos);
        }).catch((err) => {
          res.send(err);
        });
      }).catch((err) => {
        res.send(err);
      });
});
  
router.delete("/:todo_id", async (req, res) => {
    Todo.deleteOne({
        _id: req.params.todo_id,
      }).then(() => {
        Todo.find({}).then((todos) => {
          res.json(todos);
        }).catch((err) => {
          res.send(err);
        });
      }).catch((err) => {
        res.send(err);
      });
});

module.exports = router;