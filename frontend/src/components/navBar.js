import { useState } from 'react'

// navigation between pages of displayed apartments, each page has 10 apartments
// use the setPageNumber function from parent component
function NavBar() {
    return (
        <div className="navBar">
            <button>Prev</button>
            <div>Page Number</div>
            <button>Next</button>
        </div>
    )
}

export default NavBar;