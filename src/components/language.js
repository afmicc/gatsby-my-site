import React, { useState } from 'react'

const Language = () => {
  const [english, setEnglish] = useState(true);

  const toggleEnglish = () => setEnglish(!english)

  return (
    <div className="language d-flex ai-center">
      {!english &&
        (<span
          className="language__option language__option--english"
          onClick={toggleEnglish}
        >
          EN
        </span>)
      }
      {english &&
        (<span
          className="language__option language__option--spanish"
          onClick={toggleEnglish}
        >
          ES
        </span>)
      }
    </div>
  )
};

export default Language;
