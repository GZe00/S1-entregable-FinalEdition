import React, { useState, useEffect } from 'react';
import QuotePrint from './QuotePrint';
import Footer from './Footer'
import Wallpaper from '../media/fondofull.png';


const QuoteContainer = () => {


    const [data, setData] = useState(null);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');


    const [color1, setColor1] = useState(255);
    const [color2, setColor2] = useState(255);
    const [color3, setColor3] = useState(255);


    const limit = 182;


    const tweet1 = 'https://twitter.com/intent/tweet?text=%E2%80%9C';
    const tweet3 = '%0AEsta%20cita%20me%20encant%C3%B3,%20descubre%20tu%20cita%20ideal!%0AVisita%3A%20https%3A//quotes-by-moises.netlify.app/';
    const enter = '%0A';
    const spaceTwwt = '%20';


    const [tweet2, setTweet2] = useState('');

    //URL del fetch
    const url = 'https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt';


    useEffect(() => {
        if (quote && author) {

            let quoteArr = quote.split('');
            let authorArr = author.split('');
            let textFinal = '';

            if (quoteArr.length >= limit) {
                for (let i = 0; i <= limit; i++) {

                    if (quoteArr[i] == '') {
                        quoteArr.splice(i, 1, spaceTwwt);
                    }
                    if (i == limit) {
                        quoteArr.splice(i, quoteArr.length);
                        quoteArr.push(spaceTwwt);
                        quoteArr.push('...');
                        quoteArr.push(enter);
                    }
                }
            } else {
                for (let i = 0; i < quoteArr.length; i++) {
                    if (quoteArr[i] == '') {
                        quoteArr.splice(i, 1, spaceTwwt);
                    }
                    if (i == quoteArr.lastIndexOf('.')) {
                        quoteArr.push(enter);
                    }
                }
            }
            for (let i = 0; i < author.length; i++) {
                if (author[i] == '') {
                    authorArr.splice(i, 1, spaceTwwt);
                }
            }
            quoteArr = quoteArr.join('');
            authorArr = authorArr.join('');
            textFinal = quoteArr + authorArr;

            setTweet2(textFinal);

        }
    }, [quote, author])

    useEffect(() => {
        fetch(url)
            .then(responde => responde.json())
            .then(datos => setData(datos))
        setColor1(Math.round(Math.random() * 254));
        setColor2(Math.round(Math.random() * 254));
        setColor3(Math.round(Math.random() * 254));
    }, []);

    useEffect(() => {
        if (data) {
            getData();
        }
    }, [data]);


    const newQuote = () => {
        getData();
        newBg();
    }
    const newBg = () => {
        setColor1(Math.round(Math.random() * 254));
        setColor2(Math.round(Math.random() * 254));
        setColor3(Math.round(Math.random() * 254));
    }

    const getData = () => {
        const randomIndex = Math.round(Math.random() * 101);
        setQuote(data.quotes[randomIndex].quote);
        setAuthor(data.quotes[randomIndex].author);
    }

    return (
        <div>
            <div className='bg' style={{
                background: `linear-gradient(rgba(${color1}, ${color2}, ${color3}, ${0.75}),rgba(${color1}, ${color2}, ${color3}, ${0.6})), url(${Wallpaper}) `

            }}>
                <div>
                    <QuotePrint quote={quote} author={author} />
                </div>
                <div className='style-box-buttons'>
                    <div className='butt'>
                        <button className='butt-new' onClick={newQuote}> Generar nueva Frase</button>
                        <a href={tweet1 + tweet2 + tweet3} target='_blank'>
                            <button className='butt-tweet'> Compartir en Twitter</button>
                        </a>
                        
                    </div>
                </div>
            </div>
            <footer class="foot">
                <Footer /> 
            </footer>
        </div>
    )
}

export default QuoteContainer
