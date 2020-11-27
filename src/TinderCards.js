import React, { useState , useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import database from './firebase'
// import database from "firebase";
import './TinderCards.css'

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NGvoDqwwjMWNscqvW4WeIWXXUWChxO_iAQ&usqp=CAU'
    },
    {
      name: "mark zuckerberg",
      url:'data:image/jpeg;base64,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'

    }
  ]);

  // Piece of code which runs based on a condition
  useEffect(() => {
      // this us where the code run..

      // this will run once whene the complete lodes, and never
      database
      .collection("people")
      .onSnapshot((snapshot) => 
        setPeople(snapshot.docs.map((doc) => doc.data()))
      )
  },   []);

    
    //two ways 1)bad
    //const people = [];
    //people.push('sonny','quazi')

    //2)Good (PUSH TO AN ARRAY IN REACT)
    //setPeople([...people, 'sonny', 'quazi'])


    return (
        <div>
            {/* <h1>Tinder Cards</h1> */}

            <div className="tinderCards__cardContainer">

            {people.map(person=>(
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={["up","down"]}
                >
                    <div 
                    //  style={{ backgroundimage:'url(${person.url})'}}
                     styles={{ backgroundImage:`url(${person.url})` }}
                     className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
