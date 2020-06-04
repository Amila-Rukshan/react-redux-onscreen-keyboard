
import React from 'react';
import { pressKey, toggleCapslock } from './actions/allActions'
import { connect } from 'react-redux'

function KeyBoard({ pressMe, toggleCapslock, capslock }) {
  return (
      <div id="container">
        <ul id="keyboard">
            {
                ["`","1","2","3","4","5","6","7","8","9","0","-","="].map((key, i) => {
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            {/* <li className="symbol"><span className="off">`</span><span className="on">~</span></li>
            <li className="symbol"><span className="off">1</span><span className="on">!</span></li>
            <li className="symbol"><span className="off">2</span><span className="on">@</span></li>
            <li className="symbol"><span className="off">3</span><span className="on">#</span></li>
            <li className="symbol"><span className="off">4</span><span className="on">$</span></li>
            <li className="symbol"><span className="off">5</span><span className="on">%</span></li>
            <li className="symbol"><span className="off">6</span><span className="on">^</span></li>
            <li className="symbol"><span className="off">7</span><span className="on">&amp;</span></li>
            <li className="symbol"><span className="off">8</span><span className="on">*</span></li>
            <li className="symbol"><span className="off">9</span><span className="on">(</span></li>
            <li className="symbol"><span className="off">0</span><span className="on">)</span></li>
            <li className="symbol"><span className="off">-</span><span className="on">_</span></li>
            <li className="symbol"><span className="off">=</span><span className="on">+</span></li> */}
            <li className="delete lastitem" onClick={() => { pressMe('BCKSPCE') }}>bckspce</li>
            <li className="tab">tab</li>
            {
                ["q","w","e","r","t","y","u","i","o","p"].map((key, i) => {
                    key = !capslock ? key : key.toLocaleUpperCase()
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            {
                ["[", "]", "\\"].map((key, i) => {
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            <li className="capslock" onClick={toggleCapslock}>caps lock</li>
            {
                ["a","s","d","f","g","h","j","k","l"].map((key, i) => {
                    key = !capslock ? key : key.toLocaleUpperCase()
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            {
                [";", "'"].map((key, i) => {
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            <li className="return lastitem">return</li>
            <li className="left-shift">shift</li>
            {
                ["z","x","c","v","b","n","m"].map((key, i) => {
                    key = !capslock ? key : key.toLocaleUpperCase()
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            {
                [",", ".", '/'].map((key, i) => {
                    return <li className={ !capslock ? "letter" : "letter uppercase"} key={i} onClick={() => { pressMe(key) }}>{key}</li>
                })
            }
            {/* <li className="symbol"><span className="off">,</span><span className="on">&lt;</span></li>
            <li className="symbol"><span className="off">.</span><span className="on">&gt;</span></li>
            <li className="symbol"><span className="off">/</span><span className="on">?</span></li> */}
            <li className="right-shift lastitem">shift</li>
            <li className="space lastitem" onClick={() => { pressMe('SPACE') }}>&nbsp;</li>
        </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        capslock: state.inputs.isCapsOn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pressMe: (key) => dispatch(pressKey(key)),
        toggleCapslock: () => dispatch(toggleCapslock())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard);


