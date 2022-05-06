import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className="container">
                <div className="row shadow-lg my-3 py-3 rounded">
                    <h2 className="card-title text-center">Answer of the questions</h2>
                    <div className="col-12 col-md-6 col-xl-12 col-xxl-12 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title my-3"><u>1. Difference between javascript and nodejs</u></h4>
                                <p className="card-subtitle">JavaScript is a programming language. It is running in any web browser with a proper browser engine.</p>
                                <p className="card-subtitle mb-2">NodeJs is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12 col-xxl-12 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title my-3"><u>2. When should we use nodejs and when should we use mongodb</u></h4>
                                <p className="card-subtitle">NodeJs is an asynchronous event-driven JavaScript runtime. We will use it to create a server.</p>
                                <p className="card-subtitle mb-2">MongoDB is database it is used to storing data. So, when we need to store our data we should use MongoDB.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12 col-xxl-12 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title my-3"><u>3. Differences between sql and nosql databases</u></h4>
                                <p className="card-subtitle mb-2">
                                    SQL Database
                                    <ul>
                                        <li>SQL database is a relational database system.</li>
                                        <li>SQL database have static or pre-defined schema</li>
                                        <li>SQL database are best suited for complex queries</li>
                                    </ul>
                                </p>
                                <p className="card-subtitle">
                                    NoSQL Database
                                    <ul>
                                        <li>NoSQL database is a non-relational database system.</li>
                                        <li>NoSQL database have dynamic schema</li>
                                        <li>NoSQL database databases are not so good for complex queries</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12 col-xxl-12 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title my-3"><u>What is the purpose of jwt and how does it work?</u></h4>
                                <p className="card-subtitle mb-2">
                                    JWT are most commonly used for Secure API and auth related work to be done.
                                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;