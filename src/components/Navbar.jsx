import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://www.google.com/imgres?q=flipkart%20logo&imgurl=https%3A%2F%2Fimg.favpng.com%2F15%2F4%2F21%2Flogo-flipkart-vector-graphics-brand-snapdeal-png-favpng-pzW3EbykEGRYVydms2wJMKMeQ.jpg&imgrefurl=https%3A%2F%2Ffavpng.com%2Fpng_view%2Famazon-seller-central-logo-logo-flipkart-vector-graphics-brand-snapdeal-png%2FJPWaQ2qq&docid=-mTvhqp6C3q14M&tbnid=84rSIwDbePNYgM&vet=12ahUKEwifor_24viOAxUDcWwGHb-iKmoQM3oECB0QAA..i&w=820&h=216&hcb=2&ved=2ahUKEwifor_24viOAxUDcWwGHb-iKmoQM3oECB0QAA" alt="" />

      <div className='nav-items'>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact Us</li>
      </div>
      <div className="btn">
        <button>Login</button>
        <button>Register</button>
      </div>

    </div>
  )
}

export default Navbar