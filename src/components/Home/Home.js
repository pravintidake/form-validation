import React from 'react'
import { SliderItems, categories, popularProducts } from '../../BookData.js'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Home = () => {
    return (
        <>

            <AwesomeSlider animation="cubeAnimation" style={{ height: 500 }}>
                {SliderItems.map((item) => (
                    <div data-src={item.img} style={{ background: item.bg }} key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </AwesomeSlider>
            <div className="container my-5">
                <h1 className="text-center mt-5">Categories</h1>
                <div className="row">
                    {categories.map((item) => (
                        <div className="col-lg-4 col-md-12 col-sm-12" key={item.id}>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <img src={item.img} alt={item.img} style={{ width: '100%', height: '200px' }} />
                                    <h3>{item.title}</h3>
                                </div>
                                {/* <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-info">Show Now</button>
                                    <button className="btn btn-warning">Add to Cart</button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="text-center mt-5">Popular Products</h1>
                <div className="row">
                    {popularProducts.map((item) => (
                        <div className="col-lg-4 col-md-12 col-sm-12" key={item.id}>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <img src={item.img} alt={item.img} style={{ width: '100%', height: '200px' }} />
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="card-footer d-flex justify-content">
                                    <button className="btn btn-success">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home