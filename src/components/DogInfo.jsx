import './dogInfo.css'

const DogInfo = ({dog}) => {

    return ([
        <body class="doginfo" >
            <header class="infoheader"> 
                <img src={dog.img} alt="dog"></img>
                <h2>{dog.name}</h2>
            </header>
            <main class="infowrapper">
                <div class="inforows">
                    <h4>Breed: </h4>
                    <p>{dog.breed}</p>
                </div>
                <div class="inforows">
                    <h4>Sex: </h4>
                    <p>{dog.sex}</p>
                </div>
                <div class="inforows">
                    <h4>Age: </h4>
                    <p>{dog.age}</p>
                </div>
                <div class="inforows">
                    <h4>Chipnumber: </h4>
                    <p> {dog.chipNumber}</p>
                </div>
                <h2>Owner</h2>
                <div class="inforows">
                    <h4>Name: </h4>
                    <p>{dog.owner.name} {dog.owner.lastName}</p>
                </div>
                <div class="inforows">
                    <h4>Phonenumber: </h4>
                    <p>{dog.owner.phoneNumber}</p>
                </div>
            </main>
        </body>
            
        
    ])
}


export default DogInfo;