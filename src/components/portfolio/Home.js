import React from 'react';
import '../styles/home.scss';
import musicImage from '../music.png'

const Home = () => {
    return (
        <section className="page-start flex-center mt-7" >
            <div className="flex-row" style={{ width: '80%'}}>
                <div className="Text-container" style={{width: '50%', height: '100%'}} >
                    <h2>Hello I'm Usukhbayar</h2>
                    <p> At risus viverra adipiscing at in tellus integer... </p>

                </div>
                <div className="Image-container" style={{width: '40%', height: '100%'}} >
                    <img src={musicImage} />
                </div>
            </div>
        </section>
    )
} 
export default Home;