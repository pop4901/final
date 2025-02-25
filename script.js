document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (loginForm) {
        const loginError = document.getElementById("loginError");

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                alert("Login successful! Redirecting to video...");
                window.location.href = "video.html";
            } else {
                loginError.classList.remove("hidden");
            }
        });

        // ซ่อนข้อความแจ้งเตือนเมื่อเริ่มพิมพ์ใหม่
        document.getElementById("loginUsername").addEventListener("input", () => {
            loginError.classList.add("hidden");
        });
        document.getElementById("loginPassword").addEventListener("input", () => {
            loginError.classList.add("hidden");
        });
    }
});
