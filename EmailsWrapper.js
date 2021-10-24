const axios = require('axios');

class EmailsWrapper {

    constructor(apiUrl, apiAccessKey) {
        this.instance = axios.create({
            baseURL: apiUrl,
            timeout: 1000,
            headers: {
                'Authorization': apiAccessKey
            }
        });
    }

    async getEmails(limit, after) {

        let emails;

        await this.instance.get('emails/list', {
            params: {
                limit: limit,
                after: after
            }
        }).then(response => {
            if (response.status == 200) {
                emails = response.data;
            }
        }).catch(error => {
            throw error;
        });

        return emails;
    }

    async getEmail(address) {
        let email;

        await this.instance.get(`emails/email/${address}`).then(response => {
            if (response.status == 200) {
                email = response.data;
            }
        }).catch(error => {
            throw error;
        });

        return email;
    }

    async deleteEmail(address) {
        let deleted = false;

        await this.instance.delete(`emails/${address}`).then(response => {
            if (response.status == 200) {
                deleted = response.data.deleted;
            }
        }).catch(error => {
            throw error;
        });

        return deleted;
    }

    async createEmail(payload) {
        let email;

        const json = JSON.stringify(payload);

        await this.instance.post('emails', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status == 200) {
                email = response.data;
            }
        }).catch(error => {
            throw error;
        });

        return email;
    }

    async updateEmail(address, payload) {
        let email;

        const json = JSON.stringify(payload);

        await this.instance.put(`emails/${address}`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status == 200) {
                email = response.data;
            }
        }).catch(error => {
            throw error;
        });

        return email;
    }

};

module.exports.EmailsWrapper = EmailsWrapper;