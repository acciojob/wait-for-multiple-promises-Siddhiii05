const output = document.getElementById("output");

function createPromise() {
	const delay = Math.random * 2 + 1
	return newPromise((resolve) => {
		setTimeOut(() => {
			resolve(delay);
		},delay * 1000);
	})
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

const startTime = performance.now();

Promise.all([promise1, promise2, promise3]).then((results) => {
	const endTime = performance.now();
	const totalTime = (endTime - startTime)/1000;

	output.innerHTML = "";
	results.forEach(time, index) => {
		const row = document.createElement("tr");
		row.innerHTML = `
			<td>Promise ${index + 1}</td>
			<td>${time.toFixed(3)}</td>
		`;
	}
	output.appendChild(row);

	const totalRow = document.createElement("tr");
	totalRow.innerHTML = `
		<td>Total</td>
		<td>${totalTime.toFixed(3)}</td>
	`;
	output.appendChild(totalRow);
})