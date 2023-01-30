window.onload = () => {
    let params = (new URL(document.location)).searchParams;
    let title = params.get('title');
    if (title !== null)
        document.getElementById("leftmar").textContent = title;
}