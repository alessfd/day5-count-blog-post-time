let data = []

function addData(event) {

  event.preventDefault()

  let title = document.getElementById("input-blog-title").value;
  let datestart = document.getElementById("datestart").value;
  let dateend = document.getElementById("dateend").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  if (title == "") {
    return alert('Title tidak boleh kosong.')
  } else if (datestart == "") {
    return alert('Tanggal mulai tidak boleh kosong.')
  } else if (dateend == "") {
    return alert('Tanggal selesai tidak boleh kosong.')
  } else if (datestart > dateend) {
    return alert('Tanggal mulai tidak boleh lebih besar dari tanggal selesai.')
  } else if (content == "") {
    return alert('Content tidak boleh kosong.')
  } else if (image.length == 0) {
    return alert('Gambar tidak boleh kosong.')
  } 

  let gambar = URL.createObjectURL(image[0])

  let blog = 
  {
    title,
    datestart,
    dateend,
    content,
    gambar,
    author: "Alessandro Fayez"
  }

  data.push(blog)
  console.log(data)
  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ``
  for (let index = 0; index < data.length; index++) {
    document.getElementById("contents").innerHTML += `<div class="lmao" id="blog">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${konversiWaktu(data[index].datestart)} - ${konversiWaktu(data[index].dateend)}
      </div>
      <div>
      ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
      <p style="text-align: right;">
        Duration: ${selisihWaktu(data[index].datestart, data[index].dateend)}
      </p>
    </div>
  </div>`
  }
}

function konversiWaktu(time) {
  let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]

  let a = new Date(time)
  console.log(a)

  return `${a.getDate()} ${monthName[a.getMonth()]} ${a.getFullYear()}`
}

function selisihWaktu(timeStart, timeEnd) {
  let a = new Date(timeStart)
  let b = new Date(timeEnd)

  let duration = b - a
  console.log("jarak", duration)

  let milliseconds = 1000

  let distanceYear = Math.floor(duration / (milliseconds * 60 * 60 * 24 * 30 * 12))
  let distanceMonth = Math.floor(duration / (milliseconds * 60 * 60 * 24 * 30))
  let distanceDay = Math.floor(duration / (milliseconds * 60 * 60 * 24))

  if (distanceYear > 1) {
    return `${distanceYear} years`
  } else if (distanceYear == 1) {
    return `${distanceYear} year`
  } else if (distanceMonth > 1) {
    return `${distanceMonth} months`
  } else if (distanceMonth == 1) {
    return `${distanceMonth} month`
  } else if (distanceDay > 1) {
    return `${distanceDay} days`
  } else if (distanceDay == 1) {
    return `${distanceDay} day`
  }
}