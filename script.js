document.getElementById('add-expense').addEventListener('click', () => {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('expense-category').value;

    if (name && amount && category) {
        const tableBody = document.querySelector('#expense-table tbody');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${name}</td>
            <td>$${amount.toFixed(2)}</td>
            <td>${category}</td>
            <td><button class="delete-btn">Delete</button></td>`;

        tableBody.appendChild(row);

        const totalExpense = document.getElementById('total-expense');
        totalExpense.textContent = (parseFloat(totalExpense.textContent) + amount).toFixed(2);

        row.querySelector('.delete-btn').addEventListener('click', () => {
            tableBody.removeChild(row);
            totalExpense.textContent = (parseFloat(totalExpense.textContent) - amount).toFixed(2);
        });

        document.getElementById('expense-tracker').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
