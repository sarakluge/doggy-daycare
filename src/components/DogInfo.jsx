import './dogInfo.css'
import React, { useState, useEffect } from 'react'


const DogInfo = () => {


    return ([
        <body class="infobody">
            <header class="infoheader"> 
                <img></img>
                <h2>Hundnamn</h2>
            </header>
            <main class="infowrapper">
                <div class="inforows">
                    <h4>Ras: </h4>
                    <p> hundras</p>
                </div>
                <div class="inforows">
                    <h4>Kön: </h4>
                    <p>hona/hane</p>
                </div>
                <div class="inforows">
                    <h4>Ålder: </h4>
                    <p>4</p>
                </div>
                <div class="inforows">
                    <h4>Chipnummer: </h4>
                    <p>000000</p>
                </div>
                <h2>Ägare</h2>
                <div class="inforows">
                    <h4>Namn: </h4>
                    <p>förnamn efternamn</p>
                </div>
                <div class="inforows">
                    <h4>Telefonnummer: </h4>
                    <p>070 222222</p>
                </div>
            </main>
        </body>
            
        
    ])
}


export default DogInfo;