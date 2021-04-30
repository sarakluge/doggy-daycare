import './dogList.css'
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const DogList = ({setDog}) => {
    const [dogList, setDogList] = useState([]);

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/608a8d5facc8d11948f4e73f')
        .then((response) => response.json())
        .then((data) => setDogList(data));
    
    }, []); 


    let listContent = dogList.map((dog)=> {
        var sex = ""
        if(dog.sex === "female") {
            sex = "\u2640"
        } else {
            sex = "\u2642"
        }

        let present = "not present";
        let presentIcon = "\u2715"
        if(dog.present) {
            present = "present"
            presentIcon = "\u2713"
        }


        return ([
            
            <Link className="link" to="/dog-info">
                <div key={dog.chipnumber} className="wrapper" onClick={() => setDog(dog)}>
                    <img className="image" src={dog.img} alt="dog"></img>
                
                        <h3 className="name">{dog.name} {sex}</h3>
                        <p className="breed">{dog.breed}</p>
                    
                    <button className={dog.present ? "present" : "not-present"}>{presentIcon}</button>
                    <div className="present-text">{present}</div>
                </div>
            </Link>
            
        ]);   
    })

    return ([
        <header className="list-header">
            <h1 className="headline">Doggy-daycare</h1>
        </header>,
        <main key="list" className="list">
            {listContent}
        </main>
    ])

}

export default DogList;