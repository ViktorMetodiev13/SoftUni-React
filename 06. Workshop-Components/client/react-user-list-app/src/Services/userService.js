const baseUrl = 'http://localhost:3005/api/users';

export async function getAll() {
    let response = await fetch(baseUrl);
    let result = await response.json();

    return result.users;
}