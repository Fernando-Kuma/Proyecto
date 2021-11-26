export default function Token() {
    let token;
    token = JSON.parse(window.localStorage.getItem('loggedAppUser'));
    console.log(token.access_token);
}
