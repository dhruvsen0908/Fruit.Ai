// const express = require("express");
// const router = express.Router();
// const googletranslate = require("../controllers/google-controller");

// router.route("/google").get(googletranslate);

// module.exports = router;


const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();

const getTranslation = async (req, res) => {
  try {
    const text = req.query.text || 'Hello, world!';
    const target = req.query.target || 'es'; // Default to Spanish

    const [translation] = await translate.translate(text, target);

    res.status(200).json({
      originalText: text,
      translatedText: translation,
    });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
};

module.exports = {
  getTranslation,
};
