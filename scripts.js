const blogs = [
    { title: "First Secret", date: "March 20, 2025", content: "This is the first hidden message." },
    { title: "Another Mystery", date: "March 21, 2025", content: "Secrets lie within..." }
];

function renderBlogs() {
    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = "";
    blogs.forEach((blog, index) => {
        const blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry");
        blogEntry.innerHTML = `
            <h2>${blog.title}</h2>
            <p class="date">${blog.date}</p>
            <div class="blog-content">${blog.content}</div>
        `;
        blogEntry.addEventListener("click", () => {
            const content = blogEntry.querySelector(".blog-content");
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
        blogList.appendChild(blogEntry);
    });
}

document.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.style.opacity = 1 - window.scrollY / 300;
});

renderBlogs();
