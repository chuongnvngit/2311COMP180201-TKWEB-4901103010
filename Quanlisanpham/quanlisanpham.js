window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('app-form');
    const appNameInput = document.getElementById('app-name');
    const appList = document.getElementById('app-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const appName = appNameInput.value;
        if (appName) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${appName}</span>
                <button class="edit">Chỉnh sửa</button>
                <button class="delete">Xóa</button>
            `;
            appList.appendChild(li);

            appNameInput.value = "";
        }
    });

    appList.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('edit')) {
            const li = target.closest('li');
            const appName = li.getElementsByTagName('span')[0].innerText;
            const newAppName = prompt('Nhập tên mới cho ứng dụng', appName);
            if (newAppName) {
                li.getElementsByTagName('span')[0].innerText = newAppName;
            }
        } else if (target.classList.contains('delete')) {
            const li = target.closest('li');
            li.remove();
        }
    });
});