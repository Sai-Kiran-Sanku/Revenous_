import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Business=()=>{
    const bus1={
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }
    return(

        <div className='business'>
        <img src={bus1.imageSrc} width={300} height={300}></img>
        <h3>{bus1.name}</h3>
        <table>
            <tr>
                <td>{bus1.address}</td>
                <td>{bus1.category.toLocaleUpperCase()}</td>
            </tr>
            <tr>
                <td>{bus1.city}</td>
                <td>{bus1.rating}</td>   
            </tr>
            <tr>
                <td>{bus1.state}{" "}{bus1.zipCode}</td>
                <td>{bus1.reviewCount}</td>   
            </tr>
        </table>
        </div>
    )
}
export default Business;