import React from 'react';
import Layout from "../components/Layout.jsx";
import Dashboard from "../components/Dashboard.jsx";

function Home() {

    return (
        <div>
            <Layout>
                <Dashboard/>
            </Layout>
        </div>
    );
}

export default Home;