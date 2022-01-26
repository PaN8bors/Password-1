import input from 'input';

async function main() {
    const answer = 'my password';
    let response;

    while (response != answer) {
        response = await input.text('What is the password?');
        if (response != answer) {
            console.log('Please try again.');
        } else {
            console.log('Correct!');
        }
    }
}

main();