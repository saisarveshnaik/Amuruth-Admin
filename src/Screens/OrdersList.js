import React from 'react'
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const OrdersList = () => {
  return (
    
    <>
     <Sidebar/>
     <main className="main-wrap">
            <Navbar/>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Latest Orders</h2>
                        <p>Whole data about your business here</p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-primary"><i className="text-muted material-icons md-post_add"></i>Create report</a>
                    </div>
                </div>
               
                <div className="card mb-4">
                    <header className="card-header">
                        <h4 className="card-title">Latest orders</h4>
                        <div className="row align-items-center">
                            <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                                <div className="custom_select">
                                    <select className="form-select select-nice">
                                        <option selected>All Categories</option>
                                        <option>Women's Clothing</option>
                                        <option>Men's Clothing</option>
                                        <option>Cellphones</option>
                                        <option>Computer & Office</option>
                                        <option>Consumer Electronics</option>
                                        <option>Jewelry & Accessories</option>
                                        <option>Home & Garden</option>
                                        <option>Luggage & Bags</option>
                                        <option>Shoes</option>
                                        <option>Mother & Kids</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2 col-6">
                                <input type="date" value="02.05.2021" className="form-control" />
                            </div>
                            <div className="col-md-2 col-6">
                                <div className="custom_select">
                                    <select className="form-select select-nice">
                                        <option selected>Status</option>
                                        <option>All</option>
                                        <option>Paid</option>
                                        <option>Chargeback</option>
                                        <option>Refund</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div className="table-responsive">
                                <table className="table align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" className="text-center">
                                                <div className="form-check align-middle">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck01" />
                                                    <label className="form-check-label" for="transactionCheck01"></label>
                                                </div>
                                            </th>
                                            <th className="align-middle" scope="col">Order ID</th>
                                            <th className="align-middle" scope="col">Billing Name</th>
                                            <th className="align-middle" scope="col">Date</th>
                                            <th className="align-middle" scope="col">Total</th>
                                            <th className="align-middle" scope="col">Payment Status</th>
                                            <th className="align-middle" scope="col">Payment Method</th>
                                            <th className="align-middle" scope="col">View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                                                    <label className="form-check-label" for="transactionCheck02"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2540</a></td>
                                            <td>Neal Matthews</td>
                                            <td>07 Oct, 2021</td>
                                            <td>$400</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success">Paid</span>
                                            </td>
                                            <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard</td>
                                            <td>
                                                <a href="/order-details" className="btn btn-xs"> View details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck03" />
                                                    <label className="form-check-label" for="transactionCheck03"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2541</a></td>
                                            <td>Jamal Burnett</td>
                                            <td>07 Oct, 2021</td>
                                            <td>$380</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-danger">Chargeback</span>
                                            </td>
                                            <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Visa</td>
                                            <td>
                                                <a href="/order-details" className="btn btn-xs"> View details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck04" />
                                                    <label className="form-check-label" for="transactionCheck04"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2542</a></td>
                                            <td>Juan Mitchell</td>
                                            <td>06 Oct, 2021</td>
                                            <td>$384</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success">Paid</span>
                                            </td>
                                            <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal</td>
                                            <td>
                                                <a href="/order-details" className="btn btn-xs"> View details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck05" />
                                                    <label className="form-check-label" for="transactionCheck05"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2543</a></td>
                                            <td>Barry Dick</td>
                                            <td>05 Oct, 2021</td>
                                            <td>$412</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success">Paid</span>
                                            </td>
                                            <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard</td>
                                            <td>
                                                <a href="/order-details" className="btn btn-xs"> View details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck06" />
                                                    <label className="form-check-label" for="transactionCheck06"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2544</a></td>
                                            <td>Ronald Taylor</td>
                                            <td>04 Oct, 2021</td>
                                            <td>$404</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-warning">Refund</span>
                                            </td>
                                            <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Visa</td>
                                            <td>
                                                <a href="/order-details" className="btn btn-xs"> View details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="transactionCheck07" />
                                                    <label className="form-check-label" for="transactionCheck07"></label>
                                                </div>
                                            </td>
                                            <td><a href="#" className="fw-bold">#SK2545</a></td>
                                            <td>Jacob Hunter</td>
                                            <td>04 Oct, 2021</td>
                                            <td>$392</td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success">Paid</span>
                                            </td>
                                            <td><i className="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal</td>
                                            <td>
                                                <a href="/order-details" className="btn btn-xs"> View details</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-area mt-30 mb-50">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                            <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">16</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#"><i className="material-icons md-chevron_right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Footer/>
        </main>
    </>
  )
}

export default OrdersList