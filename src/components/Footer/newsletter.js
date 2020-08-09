import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const validSubscription = email

  const handleEmail = ({ target: { value } }) => setEmail(value)
  const handleSuscribe = event => {
    event.preventDefault();

    if (validSubscription) {
      setLoading(true)

      console.log('email', email) // TODO: call to the api
    }
    setLoading(false)
  }

  return (
    <div className="newsletter w-100">
      <div className="newsletter__container d-flex fd-row jc-center">
        <div className="newsletter__container__title">
          <h2 className="m-0">
            Newsletter
          </h2>
          <p className="newsletter__container__title__subheader m-0" >
            Subscribe to our lastest news
          </p>
        </div>
        <form className="newsletter__container__form" onSubmit={handleSuscribe}>
          <input className="newsletter__container__form__email" type="text" placeholder="E-mail"
            onChange={handleEmail}
            disabled={loading} />
          <button
            className="action action__primary"
            disabled={!validSubscription || loading}
            submit >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  )
};

export default Newsletter;
