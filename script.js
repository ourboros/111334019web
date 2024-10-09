// 這裡可以添加互動功能的 JavaScript 代碼，
// 例如點擊社交媒體按鈕的功能，或其他動態效果
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login');
    const joinButton = document.querySelector('.join');

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Login functionality to be implemented.');
    });

    joinButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Join functionality to be implemented.');
    });
});
