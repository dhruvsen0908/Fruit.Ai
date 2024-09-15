import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { googleTranslate } from "./googleTranslate";

export const Google = () => {
  useEffect(() => {
    // Call the googleTranslate function when the component mounts
    googleTranslate()
      .then(() => {
        console.log("Google Translate initialized successfully");
      })
      .catch((error) => {
        console.error("Failed to initialize Google Translate:", error);
      });

    return () => {
      // Optionally clean up the widget if needed
      const element = document.getElementById('google_translate_element');
      if (element) {
        element.innerHTML = ''; // Clear the element
      }
    };
  }, []);

  return (
    <div>
      <h1>Google Translate</h1>
      <div id="google_translate_element"></div>
      <NavLink to="/">Return Home</NavLink>
    </div>
  );
};

