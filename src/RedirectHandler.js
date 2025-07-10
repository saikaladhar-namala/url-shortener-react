import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { REDIRECT_BASE_URL } from './config/apiConfig';
import ExpiredUrlPage from './components/ExpiredUrlPage';
import NotFoundPage from './NotFoundPage';

const RedirectHandler = () => {
    const { shortCode } = useParams();
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const tryRedirect = async () => {
            try {
                await axios.get(`${REDIRECT_BASE_URL}/${shortCode}`);
                setStatus('redirecting');
            } catch (error) {
                if (error.response && error.response.status === 410) {
                    setStatus('expired');
                } else {
                    setStatus('notfound');
                }
            }
        };

        tryRedirect();
    }, [shortCode]);

    if (status === 'loading') {
        return <p className="text-center mt-5 text-info">Checking link and redirecting...</p>;
    }

    if (status === 'expired') {
        return <ExpiredUrlPage originalUrl={null} onGoBack={() => window.location.href = "/"} />;
    }

    if (status === 'notfound') {
        return <NotFoundPage />;
    }

    return null;
};

export default RedirectHandler;
