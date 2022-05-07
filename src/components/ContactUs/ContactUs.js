import React from 'react';
import axios from 'axios'

const ContactUs = () => {
    return (
        <div className="container">
            <form>
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="first">First Name</label>
                            <input type="text" className="form-control" placeholder="" id="first" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="last">Last Name</label>
                            <input type="text" className="form-control" placeholder="" id="last" />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" className="form-control" placeholder="" id="company" />
                        </div>


                    </div>
                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" placeholder="phone" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="email" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="url">Your Website <small>Please include http://</small></label>
                            <input type="url" className="form-control" id="url" placeholder="url" />
                        </div>

                    </div>
                </div>


                <label htmlFor="contact-preference">When is the best time of day to reach you?</label>
                <div className="radio">
                    <label>
                        <input type="radio" name="contact-preference" id="contact-preference" value="am" />Morning
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="contact-preference" id="contact-preference" value="pm" />Evening
                    </label>
                </div>

                <label htmlFor="newsletter">Would you like to recieve our email newsletter?</label>
                <div className="checkbox">

                    <label>
                        <input type="checkbox" value="Sure!" id="newsletter" /> Sure!
                    </label>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;