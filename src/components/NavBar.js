import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
        <nav>
            <h1 className="budget-app-title"><Link className='title' to="/">BudgetBoss</Link></h1>
            <button className='new-transaction'><Link className='new' to='/transactions/new'>New Transaction</Link></button>
            <button className='view-transaction'><Link className='view' to='/transactions'>View Transaction</Link></button>
           
        </nav>
        </>

    )
}