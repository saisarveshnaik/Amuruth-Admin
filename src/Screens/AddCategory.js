import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const AddCategory = () => {
  return (
    <>
    <Sidebar/>
        <main className="main-wrap">
            <Navbar/>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Categories</h2>
                        <p>Add, edit or delete a category</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search Categories" className="form-control bg-white" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <form>
                                    <div className="mb-4">
                                        <label for="product_name" className="form-label">Name</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_name" />
                                    </div>
                                    <div className="mb-4">
                                        <label for="product_slug" className="form-label">Slug</label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_slug" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Parent</label>
                                        <select className="form-select">
                                            <option>Fruit</option>
                                            <option>Snack</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Description</label>
                                        <textarea placeholder="Type here" className="form-control"></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Create category</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-9">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </th>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Slug</th>
                                                <th>Order</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>21</td>
                                                <td><b>Cake & Milk</b></td>
                                                <td>Cake & Milk</td>
                                                <td>/cake</td>
                                                <td>1</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                         
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>2</td>
                                                <td><b>Oganic Kiwi</b></td>
                                                <td>EU standard</td>
                                                <td>/kiwi</td>
                                                <td>2</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                            
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>3</td>
                                                <td><b>Peach</b></td>
                                                <td>Peach</td>
                                                <td>/peach</td>
                                                <td>3</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                           
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><i className="material-icons md-subdirectory_arrow_right text-muted"></i></td>
                                                <td>4</td>
                                                <td><b>Red Apple</b></td>
                                                <td>Red Apple</td>
                                                <td>/apple</td>
                                                <td>4</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                             
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><i className="material-icons md-subdirectory_arrow_right text-muted"></i></td>
                                                <td>5</td>
                                                <td><b>Snack</b></td>
                                                <td>Snack</td>
                                                <td>/snack</td>
                                                <td>5</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                             
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>6</td>
                                                <td><b>Vegetables</b></td>
                                                <td>Vegetables</td>
                                                <td>/vegetables</td>
                                                <td>6</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                             
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>7</td>
                                                <td><b>Strawberry</b></td>
                                                <td>Strawberry</td>
                                                <td>/strawberry</td>
                                                <td>7</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                    </div>
                                                </td>
                                                <td>8</td>
                                                <td><b>Black plum</b></td>
                                                <td>Black plum</td>
                                                <td>/plum</td>
                                                <td>8</td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View detail</a>
                                                            <a className="dropdown-item" href="#">Edit info</a>
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
           
                        </div>
                
                    </div>
             
                </div>

            </section>
       
         <Footer/>
        </main>
    </>
  )
}

export default AddCategory