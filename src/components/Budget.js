import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    const handleBudgetChange = (newValue) => {
        if (newValue < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            // setBudgetValue(expenses);
        } else if (newValue > 20000) {
            alert('The budget value cannot be more than 20000');
        } else if (newValue >= 0 && newValue <= 20000) {
            setBudgetValue(newValue);
        }
    };

    return (
        <div className='alert alert-secondary'>
            Budget: {currency}
            <input
                value={budgetValue}
                type="number"
                min="0"
                max="20000"
                step="10"
                onChange={(e) => handleBudgetChange(Number(e.target.value))}
            />

        </div>
    );
}

export default Budget;