import React from 'react';
import GitHub from './GitHub.png';
import style from './About.module.css';

const About = () => {
    return (
        <section id="about" style={styles.container}>
            <h2 style={styles.title}>Mi Primera Página</h2>
            <a target='_blank' href='https://github.com/Sernuculo'>
            <img style={style.img}src={GitHub} alt=""/>
            </a>
            <p style={styles.paragraph}></p>
        </section>
    );
}

export default About;

const styles = {
    container: {
        
        padding: '20px',
        borderRadius: '4px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '16px',
        marginBottom: '10px',
    },
};





