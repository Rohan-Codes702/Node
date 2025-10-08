import https from 'https';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const url = `https://v6.exchangerate-api.com/v6/f150dbb7e4e31ddcdc5b436a/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(url, (res) => {
    let data = "";

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question("Enter the amount in USD: ", (amount) => {
            rl.question("Enter the target currency (e.g., INR, EUR, NPR): ", (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`);
                } else {
                    console.log("Invalid currency code.");
                }
                rl.close();
            });
        });
    });

}).on('error', (err) => {
    console.log("Error fetching exchange rates: " + err.message);
});
