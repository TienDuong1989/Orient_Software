const PASSWORD = "Orient2026";

if (sessionStorage.getItem("authenticated") !== "yes") {

    const pass = prompt("Please enter password:");

    if (pass === PASSWORD) {
        sessionStorage.setItem("authenticated", "yes");
    } else {
        document.body.innerHTML = `
            <div style="font-family:Arial;padding:50px;text-align:center">
                <h1>Access Denied</h1>
                <p>Wrong password.</p>
            </div>
        `;
        throw new Error("Unauthorized");
    }
}
