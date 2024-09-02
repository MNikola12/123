import React from 'react'
import "./ProizvodiSection.css"

function ProizvodiSection() {
return (
<>
    <div class="container">
        <div class="column">
            <div class="content">
                <h2>Column 1</h2>
                <p>This is the content of column 1.</p>
                <div className="img-wrapper">
                    <img src="images/img-1.jpg" alt="Hello" className="img1" />
                </div>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <h2>Column 2</h2>
                <p>This is the content of column 2.</p>
                <div className="img-wrapper">
                <img src="images/img-5.jpg" alt="Hello" className="img1" />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
    <div class="column">
        <div class="content">
            <h2>Column 1</h2>
            <p>This is the content of column 1.</p>
            <div className="img-wrapper">
            <img src="images/img-6.jpg" alt="Hello" className="img1" />
            </div>
            </div>
        </div>
        <div class="column">
            <div className="content">
            <h2>Column 2</h2>
            <p>This is the content of column 2.</p>
            <div className="img-wrapper">
            <img src="images/img-4.jpg" alt="Hello" className="img1" />
        </div>
        </div>
    </div>
        <div class="column">
            <div className="content">
            <h2>Column 3</h2>
            <p>This is the content of column 3.</p>
            <div className="img-wrapper">
            <img src="images/img-2.jpg" alt="Hello" className="img1" />
            </div>
            </div>
        </div>
    </div>
</>)
}

export default ProizvodiSection
