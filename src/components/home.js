import React, { useState, useEffect, useRef } from 'react';
// import { translateText } from './translationAPI'; // You'll need to replace this with your actual translation API

const Home = () => {
    const [inputText, setInputText] = useState('');
    //   const [translatedText, setTranslatedText] = useState('');
    const [inputLanguage, setInputLanguage] = useState('en'); // Default input language is English
    const [outputLanguage, setOutputLanguage] = useState('fr'); // Default output language is French
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); // Focus on the input box when component is loaded
    }, []);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        // translate(e.target.value, inputLanguage, outputLanguage);
    };

    const handleInputLanguageChange = (e) => {
        setInputLanguage(e.target.value);
        // translate(inputText, e.target.value, outputLanguage);
    };

    const handleOutputLanguageChange = (e) => {
        setOutputLanguage(e.target.value);
        // translate(inputText, inputLanguage, e.target.value);
    };

    //   const translate = async (text, inputLang, outputLang) => {
    //     try {
    //       const translation = await translateText(text, inputLang, outputLang); // Call your translation API here
    //       setTranslatedText(translation);
    //     } catch (error) {
    //       console.error('Translation error:', error);
    //     }
    //   };

    return (
        <div className='flex gap-x-3 px-16 mt-10'>
            <div className='w-1/2'>
                <textarea
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    ref={inputRef}
                    className='w-full border-2 border-gray-300 p-4 focus:border-purple-500 focus:outline-none h-36 resize-none'
                    placeholder="Enter Source Text ..."
                />
                <select value={inputLanguage} onChange={handleInputLanguageChange} className='w-full focus:outline-none bg-slate-100 p-1'>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="bn">Bengali</option>
                    <option value="zh">Chinese</option>
                    <option value="hr">Croatian</option>
                    <option value="cs">Czech</option>
                    <option value="da">Danish</option>
                    <option value="nl">Dutch</option>
                    <option value="et">Estonian</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="he">Hebrew</option>
                    <option value="hi">Hindi</option>
                    <option value="hu">Hungarian</option>
                    <option value="id">Indonesian</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="lv">Latvian</option>
                    <option value="lt">Lithuanian</option>
                    <option value="ms">Malay</option>
                    <option value="no">Norwegian</option>
                    <option value="fa">Persian</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese</option>
                    <option value="ro">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="sr">Serbian</option>
                    <option value="sk">Slovak</option>
                    <option value="sl">Slovenian</option>
                    <option value="es">Spanish</option>
                    <option value="sv">Swedish</option>
                    <option value="th">Thai</option>
                    <option value="tr">Turkish</option>
                    <option value="uk">Ukrainian</option>
                    <option value="ur">Urdu</option>
                    <option value="vi">Vietnamese</option>
                    <option value="cy">Welsh</option>
                    <option value="af">Afrikaans</option>
                    <option value="sq">Albanian</option>
                    <option value="am">Amharic</option>
                    <option value="hy">Armenian</option>
                    <option value="az">Azerbaijani</option>
                    <option value="eu">Basque</option>
                    <option value="be">Belarusian</option>
                    <option value="bs">Bosnian</option>
                    <option value="bg">Bulgarian</option>
                    <option value="ca">Catalan</option>
                    <option value="ceb">Cebuano</option>
                    <option value="ny">Chichewa</option>
                    <option value="ne">Nepali</option>


                    {/* Add other input languages here */}
                </select>
            </div>
            <div className='w-1/2 '>
                <textarea
                    // value={translatedText}
                    value="text"
                    readOnly
                    placeholder="Translated text..."
                    className='w-full border-2 border-gray-300 p-4 focus:border-purple-500 focus:outline-none h-36 resize-none'

                />
                <select value={outputLanguage} onChange={handleOutputLanguageChange}className='w-full focus:outline-none bg-slate-100 p-1' >
                    {/* <option value="fr">French</option> */}
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="bn">Bengali</option>
                    <option value="zh">Chinese</option>
                    <option value="hr">Croatian</option>
                    <option value="cs">Czech</option>
                    <option value="da">Danish</option>
                    <option value="nl">Dutch</option>
                    <option value="et">Estonian</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="he">Hebrew</option>
                    <option value="hi">Hindi</option>
                    <option value="hu">Hungarian</option>
                    <option value="id">Indonesian</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="lv">Latvian</option>
                    <option value="lt">Lithuanian</option>
                    <option value="ms">Malay</option>
                    <option value="no">Norwegian</option>
                    <option value="fa">Persian</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese</option>
                    <option value="ro">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="sr">Serbian</option>
                    <option value="sk">Slovak</option>
                    <option value="sl">Slovenian</option>
                    <option value="es">Spanish</option>
                    <option value="sv">Swedish</option>
                    <option value="th">Thai</option>
                    <option value="tr">Turkish</option>
                    <option value="uk">Ukrainian</option>
                    <option value="ur">Urdu</option>
                    <option value="vi">Vietnamese</option>
                    <option value="cy">Welsh</option>
                    <option value="af">Afrikaans</option>
                    <option value="sq">Albanian</option>
                    <option value="am">Amharic</option>
                    <option value="hy">Armenian</option>
                    <option value="az">Azerbaijani</option>
                    <option value="eu">Basque</option>
                    <option value="be">Belarusian</option>
                    <option value="bs">Bosnian</option>
                    <option value="bg">Bulgarian</option>
                    <option value="ca">Catalan</option>
                    <option value="ceb">Cebuano</option>
                    <option value="ny">Chichewa</option>
                    <option value="ne">Nepali</option>
                    {/* <!-- Add more languages as needed --> */}

                    {/* Add other output languages here */}
                </select>
            </div>
        </div>
    );
};

export default Home;
