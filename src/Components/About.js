import React, { useState } from 'react'

export default function About(props) {

    const [myStyle, setmyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        }
    )
    const [btnTxt, setBtntxt] = useState('Enable light mode');

    const toggleMode = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })

            setBtntxt('Enable Light mode');
        } else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntxt('Enable dark mode');

        }

    }

    return (
        <div className='container' >
            <h1 style={{ color: props.changeMode === 'dark' ? 'white' : 'black' }}>{props.title}</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header">

                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      
                    <h2> Welcome to <code>TextUtils</code> your go-to platform for easy and efficient text manipulation.</h2>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Welcome to TextUtils</strong>  <p>your go-to platform for simple yet powerful text manipulation tools. We understand how essential it is to have quick access to utilities that can transform your text effortlessly, whether you’re working on documents, code, or any type of writing. That's why we’ve designed TextUtils to provide a smooth and efficient experience for all your text modification needs.

                            Our suite of tools allows you to perform a variety of functions such as converting text to uppercase or lowercase, removing spaces for a cleaner format, and even reversing text for creative uses. These utilities are ideal for anyone, from students needing formatting tweaks to professionals looking to streamline their workflow.

                            TextUtils is designed to be user-friendly and accessible from any device, ensuring that you can manipulate your text wherever you are. We believe in saving time and simplifying tasks with easy-to-use features that help you focus on what truly matters – getting your message across effectively.

                            At TextUtils, we're committed to enhancing your productivity with tools that are intuitive, fast, and reliable. Whether you're editing a quick snippet or transforming large blocks of text, TextUtils has the functionality you need in one convenient place.

                            Give it a try and discover how TextUtils can make your text manipulation tasks easier and more efficient!</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='container my-3'>
                <button className='btn btn-primary me-2' onClick={toggleMode}>{btnTxt}</button>
            </div>
        </div>
    )
}
