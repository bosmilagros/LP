import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Milagros</h1>
                <p>Your one-stop solution for all your needs.</p>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;