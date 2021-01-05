import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
            <h1>Fero Fly</h1>
            <h6>Magnify your Journey</h6>
            <div className="img"></div>
            <label className="check-in" htmlFor="check-in">Check in</label>
            <label className="check-out" htmlFor="check-out">Check out</label>
            <label className="adult" htmlFor="adult">Adult</label>
            <label className="kids" htmlFor="kids">Kids</label>
            <form>
                <input type="date" name="check-in" id="check-in"/>
                <input type="date" name="check-out" id="check-out"/>
                <input type="number" name="adult" value="1" id="adult"/>
                <input type="number" name="kids" value="0" id="kids"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home
