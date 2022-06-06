import { useState } from 'react'
import { popularProducts } from '../../BookData'
import BookTable from './BookTable'

const Books = () => {
    return (
        <>
            <div className="container mt-3" id="books">
                <h1 className="text-center mb-5 border-bottom">Books</h1>
                <div className="row">
                    <div className="col-9">
                        <button className="btn btn-outline-primary mb-2" data-bs-toggle="modal" data-bs-target="#bookFormModal">Add New Book</button>
                    </div>
                    <div className="col-3">
                        <div>
                            <input className="form-control"
                                type="search"
                                placeholder="Search here"
                            />
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Auther</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popularProducts.map((item) => (
                                <BookTable key={item.id} id={item.id} image={item.img} alt={item.img} title={item.title} author={item.author} desc={item.desc} price={item.price} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Books