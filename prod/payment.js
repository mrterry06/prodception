import braintree from 'braintree';

const gateway = braintree.connect({
    enviroment: braintree.Environment.Sandbox,
    merchantId: 'qmqgc3p64fgr6tvx',
    publicKey: '8zr25kz5dpd5f2nm',
    privateKey: '8f6ddb2833c71a007aaf6896f935263d'
});

module.exports = {
    getClientToken: (callback) => {
        gateway.clientToken.generate({}, (err, res) => {
            callback(response.clientToken);
        });
    }
}