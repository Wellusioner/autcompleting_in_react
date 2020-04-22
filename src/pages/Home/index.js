import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Header, Footer } from '../../components'
import { AutoComplete } from './components'


const Home = () => {

    return (
        <>
            <Header />
                <Container>
                    <div style={{
                        width: '100%',
                        maxWidth: '500px',
                        padding: '50px 30px',
                        margin: '20px auto'
                    }}>
                        <Typography align={'center'} variant="h3" gutterBottom>Fill the form</Typography>
                        <AutoComplete />
                    </div>
                </Container>
            <Footer />
        </>
    );
};

export default Home;