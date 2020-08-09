import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleName = ({ target: { value } }) => setData({ ...data, name: value })
  const handleEmail = ({ target: { value } }) => setData({ ...data, email: value })
  const handleMessage = ({ target: { value } }) => setData({ ...data, message: value })
  const validContact = data.name && data.email && data.message
  const handleSend = event => {
    if (event) event.preventDefault();

    if (validContact) {
      setLoading(true)

      console.log('data', data) // TODO: call to the api
    }
    setLoading(false)
  }
  const handleCmdEnter = ({ keyCode, metaKey, ctrlKey }) => {
    const KEY_CODE_ENTER = 13
    keyCode === KEY_CODE_ENTER && (metaKey || ctrlKey) && handleSend()
  }

  return (
    <div className="contact">
      <div className="contact__container d-flex fd-column jc-center ai-center">
        <div className="contact__container__header">
          <h1
            id="contact"
            className="contact__container__header__title"
          >
            Get Started
          </h1>
          <p className="contact__container__header__description">
            Leave a line of what you are reseach from us and
            we will contact as soon as posible to give you our consulting
          </p>
        </div>
        <div className="contact__container__form">
          <div className="contact__container__form__fields">
            <form className="w-100 d-flex fd-column" onSubmit={handleSend}>
              <input type="text" placeholder="Name"
                onChange={handleName}
                disabled={loading} />
              <input type="text" placeholder="E-mail"
                onChange={handleEmail}
                disabled={loading} />
              <textarea placeholder="Message" rows="10"
                onChange={handleMessage}
                onKeyDown={handleCmdEnter}
                disabled={loading} />
              <button
                className="action action__primary w-100"
                disabled={!validContact || loading}
                submit
                onClick={handleSend}>
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
