import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import { useState } from "react"

const FormComponent = () => {
  const [email, setEmail] = useState("")
  const handleSubmit = evt => {
    evt.preventDefault()
    setEmail("")
  }
  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
        integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47"
        crossorigin="anonymous"
      />
      <form class="pure-form" onSubmit={handleSubmit}>
        <fieldset>
          <input
            className="pad5 meow"
            type="email"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="submit"
            value="Submit"
            className="meow pure-button pure-button-primary"
          />
        </fieldset>
      </form>
    </Layout>
  )
}

export default FormComponent
