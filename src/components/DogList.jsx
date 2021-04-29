import './dogList.css'
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


//const ApiUrl = 'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6'



const DogList = () => {

    const [dogList, setDogList] = useState([]);


    useEffect(() => {
        fetch('https://api.jsonbin.io/b/6087fef3c7df3422f7ff165c')
        .then((response) => response.json())
        .then((data) => setDogList(data));
    
    }, []); 


    return (
        <main class="list">
            {dogList.map((dog)=> {
                var sex = ""
                
                if(dog.sex === "female") {
                    sex = "\u2640"
                } else {
                    sex = "\u2642"
                }
                return ([
                    
                    <Link class="link" to="/dog-info">
                        <div class="wrapper">
                            <img class="image" src={dog.img} alt="dog"></img>
                            <div class="info">
                                <h3 class="name">{dog.name} {sex}</h3>
                                <p class="breed">{dog.breed}</p>
                            </div>
                            <button class="is-present-button">&#10003;</button>
                            <div class="is-present-text">närvarande</div>
                        </div>
                    </Link>
                    
                ]);
                
            })}
        </main>
    )

}

export default DogList;