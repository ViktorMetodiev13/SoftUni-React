const baseUrl = 'http://localhost:3005/api/users';

export async function getAll() {
    let response = await fetch(baseUrl);
    let result = await response.json();

    return result.users;
}

export async function create(userData) {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = {
        country, 
        city, 
        street, 
        streetNumber
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();

    return result.user;
}