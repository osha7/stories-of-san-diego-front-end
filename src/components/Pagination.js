import React, { useState, useEffect } from 'react';
import "../css/pagination.css";

function Pagination({pages=1, setCurrentPage, history}) {

    const numberOfPages = []

    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1)
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages
        }

        else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }
        else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
        else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        }
        else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        }
        else if (currentButton === dotsInitial) {
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
        }

        setArrOfCurrButtons(tempNumberOfPages)
        setCurrentPage(currentButton)
    }, [currentButton])

    console.log("arrOfCurrButtons", arrOfCurrButtons)
    console.log("arrOfCurrButtons", arrOfCurrButtons.length)

    // if (arrOfCurrButtons.length === 0) {
    //     return (<div>loading...</div>)
        
    // } else {
        console.log("pagination history", history)
        return (
            <div>
                <div className="pagination-container" >
                    {/* ----------prev----------- */}
                    <a href="#" className={`${currentButton === 1 ? 'disabled' : ''}`}
                        onClick = {() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                    >Prev</a>
                    {/* ----------all other buttons----------- */}
                    {arrOfCurrButtons.map((page, index) => {
                        console.log("return", page, index)
                        if(page === '...' || page === ' ...' || page === '... ') {
                            return (<div className="dots">...</div>)
                            // return (
                            //     <a
                            //         key={index}
                            //         className={currentButton === page ? 'disabled' : ''} 
                            //     >{page}</a>
                            // )
                        } else {
                        // debugger
                            return (
                                <a
                                    key={index}
                                    onClick = {() => setCurrentButton(page)} 
                                    href="#" 
                                    className={currentButton === page ? 'active' : ''} 
                                >{page}</a>
                            )
                        }
                    })}
                    {/* ----------next----------- */}
                    <a 
                        href="#" 
                        className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`}
                        onClick = {() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}
                    >Next</a>
                </div>
            </div>
        )
        
    // }
}

export default Pagination;