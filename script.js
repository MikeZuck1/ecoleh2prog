// fetchData is an asynchronous function that will be called when the data is fetched. 
async function fetchData() {
    // wait until the request completes... 
    const response = await fetch('https://www.codepassport.dev/api/offers'); // await fetch('/..')start a HTTP request.
    
    if(!response.ok) {
        const message = `An error occurred: ${message.status}`;
        throw new Error(message);
    }
}