import React, { useState } from 'react';

const Bin2Dec = () => {

    const [binNumber, setBinNumber] = useState();
    const [decNumber, setDecNumber] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const handleConvert = (e) => {
        if(binNumber === undefined) {
            return
        }

        if (binNumber.match(/^[0-1]+$/g) === null) {
            setErrorMessage('Enter either 0 or 1')
            return
        }

        setErrorMessage('')

        let binNumberArray = convertToArray(binNumber);
        let binNumberArrayReversed = reverseArray(binNumberArray);

        setDecNumber(convertBinToDec(binNumberArrayReversed));
    }

    const convertToArray = (number) => {
        return Array.from(number.toString());
    }

    const reverseArray = (array) => {
        return array.reverse();
    }

    const convertBinToDec = (binNumberArray) => {
        return binNumberArray.reduce((acc, number, index) => {
            return acc + (number * Math.pow(2, index));
        }, 0)
    }

    return(
        <div>
            <header>
                <h1>Binary to Decimal Converter</h1>
            </header>

            <div className="card">
                <label for="binaryNumber">Enter a binary number</label>
                <textarea
                    className="input-field"
                    autoComplete="off"
                    name="binaryNumber"
                    placeholder="101010"
                    rows="4"
                    onChange={ e => setBinNumber(e.target.value) }
                ></textarea>

                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
            <div className="button-wrapper">
                <button
                    onClick={e => handleConvert(e)}
                    className="button">
                    Convert to Decimal
                </button>
            </div>
            <div className="card">
                <label for="binaryNumber">Decimal result</label>
                <textarea
                    className="input-field"
                    name="decimalNumber"
                    readOnly
                    placeholder="42"
                    rows="4"
                    value={decNumber}
                ></textarea>
            </div>
        </div>
    )
}

export default Bin2Dec;