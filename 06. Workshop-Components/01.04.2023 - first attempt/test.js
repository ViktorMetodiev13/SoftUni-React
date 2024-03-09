const validateEmail = (email) => {
    if (String(email).toLowerCase().match(/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/)) {
        console.log('true');
    } else {
        console.log('false');
    }
};

validateEmail('peter.abv.bg')