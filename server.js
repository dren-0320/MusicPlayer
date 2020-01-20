/*jshint esversion: 6 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");
const multer = require("multer");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect("mongodb://localhost/mydb", options);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // 保存したいパス
    cb(null, path.join(__dirname, "public/audio"));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });
/*const upload = multer({ dest: './audio/' });*/

/*app.use(upload.single('myfile'));*/
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "audio/mpeg", limit: "100mb" }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/audio"));

const Todo = mongoose.model("Todo", {
  m_id: String,
  text: String,
  audio_path: String,
  text_2: String
});

app.get("/api/todos", (req, res) => {
  Todo.find()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/1", (req, res) => {
  Todo.find({ m_id: "1" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/2", (req, res) => {
  Todo.find({ m_id: "2" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/3", (req, res) => {
  Todo.find({ m_id: "3" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/4", (req, res) => {
  Todo.find({ m_id: "4" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/5", (req, res) => {
  Todo.find({ m_id: "5" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/6", (req, res) => {
  Todo.find({ m_id: "6" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/7", (req, res) => {
  Todo.find({ m_id: "7" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/8", (req, res) => {
  Todo.find({ m_id: "8" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/9", (req, res) => {
  Todo.find({ m_id: "9" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/todos/10", (req, res) => {
  Todo.find({ m_id: "10" })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/api/todos", upload.single("myfile"), (req, res) => {
  /*const file = req.files.file;*/
  /*req.files.audio.mv('./audio/' + req.files.audio.name);*/
  /*console.log(req.files.name);*/
  /*req.files.audio.mv('/audio/' + req.files.name);*/
  const todo = req.body;
  console.log(todo.audio_path);
  console.log(req.myfile); // form file

  console.log(req.body);
  console.log(req.file);
  /*console.log(todo.m_file.name);*/
  Todo.create({
    m_id: todo.m_id,
    text: todo.text,
    audio_path: '<audio src="audio/' + todo.audio_path + '" controls></audio>',
    text_2: todo.text_2
  })
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.send(err);
    });
});

/*app.post('/api/todos', (req, res) => {
    const todo = req.body;
    Todo.create({
            m_id : todo.m_id,
            text : todo.text,
            text_2 : todo.text_2
        })
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.send(err);
        });
});*/

app.delete("/api/todos/:todo_id", (req, res) => {
  Todo.remove({
    _id: req.params.todo_id
  })
    .then(todo => {
      res.send(todo);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get("/", (req, res) => {
  res.sendfile("./public/home.html");
});

app.listen(3000, () => {
  console.log("My app listening on port 3000!");
});
