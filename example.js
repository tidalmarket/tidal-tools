const { EmailsWrapper } = require('./index.js');

let api = new EmailsWrapper('API_URL', 'YOUR_KEY_GOES_HERE');


async function testEmails() {
    
    await api.getEmails();
    await api.getEmails(1);
    await api.getEmails(10, 'wrapper@test.com');

    await api.getEmail('wrapper@test.com');

    await api.deleteEmail('wrapper@test.com');

    await api.createEmail({
        'first_name': 'Wrapper',
        'address': 'wrapper@test.com',
        'subscribed': true
    });

    await api.updateEmail('wrapper@test.com', {
        'first_name': 'Edited Wrapper',
        'address': 'wrapper@test.com',
        'subscribed': true
    });
}

testEmails();