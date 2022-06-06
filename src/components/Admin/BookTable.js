import React from 'react'

const BookTable = ({ id, image, alt, title, author, desc, price }) => {

    console.log(id, image, alt, title, author, desc, price)
    return (
        <>
            <tr key={id}>
                <td scope="row">{id}</td>
                <td><img src={image} alt={alt} height="100px" /></td>
                <td>{title}</td>
                <td>{author}</td>
                <td>{desc}</td>
                <td>{price}</td>
                <td><button className="btn btn-outline-primary">Edit</button></td>
                <td><button className="btn btn-outline-danger">Delete</button></td>
            </tr>
        </>
    )
}

export default BookTable