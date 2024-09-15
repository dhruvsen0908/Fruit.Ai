import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Google = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    // Load the Google Translate script
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the Google Translate widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' }, // Set the default language of the page
        'google_translate_element'
      );
    };
    
    return () => {
      document.body.removeChild(script); // Clean up the script when the component is unmounted
    };
  }, []);

  // Handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Example translate function
  const handleTranslate = async () => {
    // Replace this with actual translation logic if needed
    // For now, we are simulating translation by just appending a note
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Google Translate</h1>
      <br />
      {/* Input Text Area */}
      <div>
        <textarea
          rows="4"
          cols="70"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text to translate"
          style={{ marginLeft: '20px', width: '80%', height: '100px' }}
        ></textarea>
      </div>

      {/* Translate Button */}
      <div style={{ margin: '20px 0' }}>
        <button onClick={handleTranslate}>Translate</button>
      </div>

      {/* Output Text Area */}
      <div>
        <textarea
          rows="4"
          cols="70"
          value={translatedText}
          readOnly
          placeholder="Translated text will appear here"
          style={{ marginLeft: '20px', width: '80%', height: '100px' }}
        ></textarea>
      </div>

      <div style={{ marginTop: '20px', height:'85px'}}>
        <NavLink to="/">Return Home</NavLink>
      </div>

      <div id="google_translate_element" style={{ marginTop: '20px' }}></div>
    </div>
  );
};
