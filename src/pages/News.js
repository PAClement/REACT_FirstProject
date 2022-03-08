import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Article from '../components/Article';
import axios from 'axios';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();


    }, [])

    const getData = () => {
        axios
            .get('http://localhost:3003/articles')
            .then((res) => setNewsData(res.data)); //.then == “ensuite / puis”
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 10) {
            setError(true);
        } else {
            axios
                .post('http://localhost:3003/articles', {
                    author: author,
                    content, //Possibilité de simplifier l'objet
                    date: Date.now()
                }).then(() => { //.then ==“ensuite / puis”
                    setError(false);
                    setAuthor("");
                    setContent("");
                    getData();
                });
        }
    }

    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Nom" value={author} />
                <textarea style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} onChange={(e) => setContent(e.target.value)} placeholder="Message" value={content}></textarea>

                {error && <p>Veuillez entrer 10 caractères minimum</p>}

                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {newsData
                    .sort((a, b) => b.date - a.date)
                    .map((target) => (
                        <Article article={target} key={target.id} />
                    ))}
            </ul>
        </div>
    );
};

export default News;