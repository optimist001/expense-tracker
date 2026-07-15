
export const AddTransaction = ({text,setText,amount,setAmount,onSubmit}) => {

  return (
    <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
              <label htmlFor="text">Text</label> 
              <input type="text" value={text} id='text' placeholder="Enter text..." onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
              <label htmlFor="amount"
                  >Amount <br />
                  (negative - expense, positive - income)</label
              >
              <input type="number" value={amount} id="amount" placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}
