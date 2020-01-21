const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect("mongodb://localhost/mydb", options);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "public/audio"));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const Music = mongoose.model("Music", {
  m_id: String,
  m_title: String,
  m_lyrics: String,
  m_path: String
});

app.get("/api/music", (req, res) => {
  Music.find()
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/1", (req, res) => {
  Music.find({ m_id: "1" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/2", (req, res) => {
  Music.find({ m_id: "2" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/3", (req, res) => {
  Music.find({ m_id: "3" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/4", (req, res) => {
  Music.find({ m_id: "4" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/5", (req, res) => {
  Music.find({ m_id: "5" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/6", (req, res) => {
  Music.find({ m_id: "6" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/7", (req, res) => {
  Music.find({ m_id: "7" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/8", (req, res) => {
  Music.find({ m_id: "8" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/9", (req, res) => {
  Music.find({ m_id: "9" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});
app.get("/api/music/10", (req, res) => {
  Music.find({ m_id: "10" })
    .then(musics => {
      res.json(musics);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/api/music", upload.single("file"), (req, res) => {
  const audio = req.body;

  Music.create({
    m_id: audio.m_id,
    m_title: audio.m_title,
    m_lyrics: audio.m_lyrics,
    m_path: '<audio src="audio/' + audio.m_path + '" controls></audio>'
  })
    .then(music => {
      res.json(music);
    })
    .catch(err => {
      res.send(err);
    });
});

app.delete("/api/music/:music_id", (req, res) => {
  Music.remove({
    _id: req.params.music_id
  })
    .then(music => {
      res.send(music);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get("/", (req, res) => {
  res.sendfile("./public/home.html");
});

app.listen(3000, () => {
  console.log("MusicPlayer listening on port 3000!");
});