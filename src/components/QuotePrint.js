import React, {Fragment} from 'react'

const QuptePrint = ({quote, author}) => {
    return (
        <Fragment>
            <div className = 'style-box-quote-and-author'>
                <h1 className = 'style-quote'> <span>“</span> {quote} </h1>
                <hr />
                <h3 className = 'style-author'> -{author} </h3>
            </div>
        </Fragment>
    )
}

export default QuptePrint
