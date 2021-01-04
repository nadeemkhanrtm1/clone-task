import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
            <h1>Fero Fly</h1>
            <h6>Magnify your Journey</h6>
            <div className="img"></div>
            <form>
                <input type="date" name="check-in" />
                <input type="date" name="check-out" />
                <input type="number" name="adult" value="1" />
                <input type="number" name="kids" value="0"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home
