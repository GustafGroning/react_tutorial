import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    return (
        <div> 
        {ExpenseItem(props)}; 
        </div>
    )
}

export default Expenses;

 