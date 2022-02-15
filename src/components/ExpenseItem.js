 import "./ExpenseItem.css"
 
 function ExpenseItem() {
  return (
    <div className="expense-item">
      <div> March 10th 2018 </div>
      <div className="expense-item__description">
        <h2> Car Insurance</h2>
        <div className="expense-item__price"> 245.55 </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
