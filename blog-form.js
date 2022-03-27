let blog = [];

function addBlog(event) {
    event.preventDefault();

    let project = document.getElementById("input-project-name").value;
    let startDate = document.getElementById("input-start-date").value;
    let endDate = document.getElementById("input-end-date").value;
    let duration = durationBlog(startDate, endDate);
    let description = document.getElementById("input-description").value;
    let reactjs = document.getElementById("reactjs").checked;
    let javascript = document.getElementById("javascript").checked;
    let nodejs = document.getElementById("nodejs").checked;
    let java = document.getElementById("java").checked;
    let image = document.getElementById("input-image").files;
    image = URL.createObjectURL(image[0]);  // Menyimpan gambar ke bentuk URL untuk ditampilkan

    // Kondisi Start
    if (reactjs == true) {
        reactjs = document.getElementById("reactjs").value;
    } else {
        reactjs = "";
    }

    if (javascript == true) {
        javascript = document.getElementById("javascript").value;
    } else {
        javascript = "";
    }

    if (nodejs == true) {
        nodejs = document.getElementById("nodejs").value;
    } else {
        nodejs = "";
    }

    if (java == true) {
        java = document.getElementById("java").value;
    } else {
        java = "";
    }
    // Kondisi End


    let blogPost = {
        project: project,
        duration: duration,
        description: description,
        image: image,
        reactjs: reactjs,
        javascript: javascript,
        nodejs: nodejs,
        java: java,
    };

    blog.push(blogPost);    // Nambah object ke dalam array
    console.log(blog);
    renderBlog();
}

// Function untuk menampilkan durasi berdasarkan date yang di input
function durationBlog(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);

    let duration = end.getTime() - start.getTime(); // getTime untuk mengambil waktu dalam milisecond

    let miliseconds = 1000;     // 1000 milidetik dalam 1 detik
    let secondInHours = 3600;   // 3600 detik dalam 1 jam
    let hoursInDay = 24;        // 24 jam dalam 1 hari
    let daysInMonth = 30;       // 30 hari dalam 1 bulan
    let monthsInYears = 12;     // 12 bulan dalam 1 tahun

    let year = Math.floor(duration / (miliseconds * secondInHours * hoursInDay * daysInMonth * monthsInYears))
    let month = Math.floor(duration / (miliseconds * secondInHours * hoursInDay * daysInMonth))
    let day = Math.floor(duration / (miliseconds * secondInHours * hoursInDay))

    if (day < 30) {
        return day + " hari";
    } else if (month < 12) {
        return month + " bulan";
    } else {
        return year + " tahun";
    }
}

// Data dummy first card blog
let dummyBlog = `
    <div class="card-blog1">
        <img src="assets/PewDiePie.jpg" class="image">
        <div class="card-blog-content">
            <a href="blog-detail.html">
                <h2>Dumbways Mobile App - 2021</h2>
            </a>
            <p style="color: #726C6C; font-size: 14px;">durasi : 3 bulan</p>
            <p>
                App that used for dumbways student, it was deployed and can downloaded on playstore. Happy
                download
            </p>
        </div>
        <div class="icon">
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-node"></i>
            <i class="fa-brands fa-java"></i>
        </div>
        <br>
        <div class="button-blog-card">
            <button class="button-edit">edit</button>
            <button class="button-delete">delete</button>
        </div>
    </div>
`

// Function untuk merender card blog
function renderBlog() {
    document.getElementById("blog").innerHTML = dummyBlog;

    for (let i = 0; i < blog.length; i++) {
        document.getElementById("blog").innerHTML += `
        <div class="card-blog1">
            <img src="${blog[i].image}" class="image">
            <div class="card-blog-content">
                <a href="blog-detail.html">
                    <h2>${blog[i].project}</h2>
                </a>
                <p style="color: #726C6C; font-size: 14px;">durasi : ${blog[i].duration}</p>
                <p>
                    ${blog[i].description}
                </p>
            </div>
            <div class="icon">
                <i class="${blog[i].reactjs}"></i>
                <i class="${blog[i].javascript}"></i>
                <i class="${blog[i].nodejs}"></i>
                <i class="${blog[i].java}"></i>
            </div>
            <br>
            <div class="button-blog-card">
                <button class="button-edit">edit</button>
                <button class="button-delete">delete</button>
            </div>
        </div>`;
    }
}