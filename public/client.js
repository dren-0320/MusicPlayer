function render(musics) {
  $(".musics")
    .children()
    .not(".template")
    .remove();

  const template = $(".musics").children(".template");

  musics.forEach(music => {
    const node = template
      .clone(true)
      .show()
      .removeClass("template");

    node.find(".m_id").text(music.m_id);
    node.find(".m_title").text(music.m_title);
    node.find(".m_lyrics").text(music.m_lyrics);
    node.find(".m_path").text(music.m_path);
    node.find(".id").text(music._id);
    $(".musics").append(node);
    $("div.audio-control").html(music.m_path);
  });
}

function getMusic() {
  fetch("/api/music")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_1() {
  fetch("/api/music/1")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_2() {
  fetch("/api/music/2")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_3() {
  fetch("/api/music/3")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_4() {
  fetch("/api/music/4")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_5() {
  fetch("/api/music/5")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_6() {
  fetch("/api/music/6")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_7() {
  fetch("/api/music/7")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_8() {
  fetch("/api/music/8")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_9() {
  fetch("/api/music/9")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}
function getMusic_10() {
  fetch("/api/music/10")
    .then(data => data.json())
    .then(json => {
      const musics = json;
      render(musics);
    });
}

function createMusicPage() {
  const m_file = document.querySelector("#file").files[0];
  const m_id = $(".music-id").val();
  const m_title = $(".music-title").val();
  const m_lyrics = $(".music-lyrics").val();
  const m_path = m_file.name;

  const formdata = new FormData();
  formdata.append("file", m_file);
  formdata.append("m_id", m_id);
  formdata.append("m_title", m_title);
  formdata.append("m_lyrics", m_lyrics);
  formdata.append("m_path", m_path);

  fetch("/api/music", {
    method: "POST",
    body: formdata
  })
    .then(() => {
      getMusic();
    })
    .catch(error => console.error("Error:", error));
}

function deleteMusicPage(el) {
  const id = $(el)
    .closest(".music")
    .find(".id")
    .text();
  fetch(`/api/music/${id}`, {
    method: "DELETE"
  }).then(() => {
    getMusic();
  });
}

$(getMusic);