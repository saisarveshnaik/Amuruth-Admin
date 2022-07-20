import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const OrderDetails = () => {
  return (
    <>
      <Sidebar/>
        <main className="main-wrap">
            <Navbar/>
            <section className="content-main">
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Order detail</h2>
                        <p>Details for Order ID: 3453012</p>
                    </div>
                </div>
                <div className="card">
                    <header className="card-header">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 mb-lg-0 mb-15">
                                <span> <i className="material-icons md-calendar_today"></i> <b>Wed, Aug 13, 2020, 4:34PM</b> </span> <br />
                                <small className="text-muted">Order ID: 3453012</small>
                            </div>
                            <div className="col-lg-6 col-md-6 ms-auto text-md-end">
                                <select className="form-select d-inline-block mb-lg-0 mr-5 mw-200">
                                    <option>Change status</option>
                                    <option>Awaiting payment</option>
                                    <option>Confirmed</option>
                                    <option>Shipped</option>
                                    <option>Delivered</option>
                                </select>
                                <a className="btn btn-primary" href="#">Save</a>
                                <a className="btn btn-secondary print ms-2" href="#"><i className="icon material-icons md-print"></i></a>
                            </div>
                        </div>
                    </header>
              
                    <div className="card-body">
                        <div className="row mb-50 mt-20 order-info-wrap">
                            <div className="col-md-4">
                                <article className="icontext align-items-start">
                                    <span className="icon icon-sm rounded-circle bg-primary-light">
                                        <i className="text-primary material-icons md-person"></i>
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Customer</h6>
                                        <p className="mb-1">
                                            John Alexander <br />
                                            alex@example.com <br />
                                            +998 99 22123456
                                        </p>
                                        <a href="#">View profile</a>
                                    </div>
                                </article>
                            </div>
                            
                            <div className="col-md-4">
                                <article className="icontext align-items-start">
                                    <span className="icon icon-sm rounded-circle bg-primary-light">
                                        <i className="text-primary material-icons md-local_shipping"></i>
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Order info</h6>
                                        <p className="mb-1">
                                            Shipping: Fargo express <br />
                                            Pay method: card <br />
                                            Status: new
                                        </p>
                                        <a href="#">Download info</a>
                                    </div>
                                </article>
                            </div>
                         
                            <div className="col-md-4">
                                <article className="icontext align-items-start">
                                    <span className="icon icon-sm rounded-circle bg-primary-light">
                                        <i className="text-primary material-icons md-place"></i>
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Deliver to</h6>
                                        <p className="mb-1">
                                            City: Tashkent, Uzbekistan <br />Block A, House 123, Floor 2 <br />
                                            Po Box 10000
                                        </p>
                                        <a href="#">View profile</a>
                                    </div>
                                </article>
                            </div>
                   
                        </div>
       
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th width="40%">Product</th>
                                                <th width="20%">Unit Price</th>
                                                <th width="20%">Quantity</th>
                                                <th width="20%" className="text-end">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a className="itemside" href="#">
                                                        <div className="left">
                                                            <img src="assets/imgs/items/1.jpg" width="40" height="40" className="img-xs" alt="Item" />
                                                        </div>
                                                        <div className="info">Haagen-Dazs Caramel Cone Ice</div>
                                                    </a>
                                                </td>
                                                <td>$44.25</td>
                                                <td>2</td>
                                                <td className="text-end">$99.50</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a className="itemside" href="#">
                                                        <div className="left">
                                                            <img src="assets/imgs/items/2.jpg" width="40" height="40" className="img-xs" alt="Item" />
                                                        </div>
                                                        <div className="info">Seeds of Change Organic</div>
                                                    </a>
                                                </td>
                                                <td>$7.50</td>
                                                <td>2</td>
                                                <td className="text-end">$15.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a className="itemside" href="#">
                                                        <div className="left">
                                                            <img src="assets/imgs/items/3.jpg" width="40" height="40" className="img-xs" alt="Item" />
                                                        </div>
                                                        <div className="info">All Natural Italian-Style</div>
                                                    </a>
                                                </td>
                                                <td>$43.50</td>
                                                <td>2</td>
                                                <td className="text-end">$102.04</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a className="itemside" href="#">
                                                        <div className="left">
                                                            <img src="assets/imgs/items/4.jpg" width="40" height="40" className="img-xs" alt="Item" />
                                                        </div>
                                                        <div className="info">Sweet & Salty Kettle Corn</div>
                                                    </a>
                                                </td>
                                                <td>$99.00</td>
                                                <td>3</td>
                                                <td className="text-end">$297.00</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4">
                                                    <article className="float-end">
                                                        <dl className="dlist">
                                                            <dt>Subtotal:</dt>
                                                            <dd>$973.35</dd>
                                                        </dl>
                                                        <dl className="dlist">
                                                            <dt>Shipping cost:</dt>
                                                            <dd>$10.00</dd>
                                                        </dl>
                                                        <dl className="dlist">
                                                            <dt>Grand total:</dt>
                                                            <dd><b className="h5">$983.00</b></dd>
                                                        </dl>
                                                        <dl className="dlist">
                                                            <dt className="text-muted">Status:</dt>
                                                            <dd>
                                                                <span className="badge rounded-pill alert-success text-success">Payment done</span>
                                                            </dd>
                                                        </dl>
                                                    </article>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                   
                            </div>
                   
                            <div className="col-lg-1"></div>
                            <div className="col-lg-4">
                                <div className="box shadow-sm bg-light">
                                    <h6 className="mb-15">Payment info</h6>
                                    <p>
                                        <img src="assets/imgs/card-brands/2.png" className="border" height="20" /> Master Card **** **** 4768 <br />
                                        Business name: Grand Market LLC <br />
                                        Phone: +1 (800) 555-154-52
                                    </p>
                                </div>
                                <div className="h-25 pt-4">
                                    <div className="mb-3">
                                        <label>Notes</label>
                                        <textarea className="form-control" name="notes" id="notes" placeholder="Type some note"></textarea>
                                    </div>
                                    <button className="btn btn-primary">Save note</button>
                                </div>
                            </div>
        
                        </div>
                    </div>
          
                </div>
     
            </section>
       
            <footer className="main-footer font-xs">
                <div className="row pb-30 pt-15">
                    <div className="col-sm-6">
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        &copy; Nest - HTML Ecommerce Template .
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end">All rights reserved</div>
                    </div>
                </div>
            </footer>
        </main>
    </>
  )
}

export default OrderDetails