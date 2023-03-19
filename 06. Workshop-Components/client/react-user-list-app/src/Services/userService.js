const baseUrl = 'http://localhost:3005/api/users';

export async function getAll() {
    let response = await fetch(baseUrl);
    let result = await response.json();

    return result.users;
}

export async function createUser(data) {
    const address = {
        'country': data.country,
        'street': data.street,
        'city': data.city,
        'streetNumber': data.streetNumber,
    }

    let result = Object.assign(data, address)

    const user = await fetch('http://localhost:3005/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    })
    .then(res => res.json())
    .then(res => console.log(res))

    console.log(result);
}