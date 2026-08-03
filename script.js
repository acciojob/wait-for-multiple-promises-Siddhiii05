const output = document.getElementById("output");

function createPromise() {
    const delay = Math.random() * 2 + 1;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
        }, delay * 1000);
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3]).then((results) => {

    output.innerHTML = "";

    results.forEach((time, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Promise ${index + 1}</td>
            <td>${time.toFixed(3)}</td>
        `;

        output.appendChild(row);
    });

    // Maximum promise time
    const totalTime = Math.max(...results);

    const totalRow = document.createElement("tr");

    totalRow.innerHTML = `
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
    `;

    output.appendChild(totalRow);
});