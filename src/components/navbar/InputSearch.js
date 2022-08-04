import React, { useEffect, useRef, useState } from "react"
export default function InputSearch() {
  const inputRef1 = useRef();
  const [value1, setValue1] = useState('');
  useEffect(() => {
    if (value1.length === 1)
      inputRef2.current.focus();
  }, [value1.length]);
  const onChangeValue1 = (e) => {
    setValue1(e.target.value);
  }

  const [value2, setValue2] = useState('');
  const inputRef2 = useRef();
  useEffect(() => {
    if (value2.length === 1)
      inputRef3.current.focus();
  }, [value2.length]);
  const onChangeValue2 = (e) => {
    setValue2(e.target.value);
  }

  const [value3, setValue3] = useState('');
  const inputRef3 = useRef();
  useEffect(() => {
    if (value3.length === 1)
      inputRef4.current.focus();
  }, [value3.length]);
  const onChangeValue3 = (e) => {
    setValue3(e.target.value);
  }

  const [value4, setValue4] = useState('');
  const inputRef4 = useRef();
  useEffect(() => {
    if (value4.length === 1)
      inputRef5.current.focus();
  }, [value4.length]);
  const onChangeValue4 = (e) => {
    setValue4(e.target.value);
  }

  const [value5, setValue5] = useState('');
  const inputRef5 = useRef();
  const onChangeValue5 = (e) => {
    setValue5(e.target.value);
  }

  return (
    <div className="input-search">
      <form>
        <div className="input-spesifik">
          <ul className="input-spesifik-item justify-content-between">
            <li>
              <input ref={inputRef1} onChange={onChangeValue1} type="text" autoComplete="off" className="text-center" id="pertama" maxLength={1} value={value1}></input><br />
              <p className="posisi">1</p>
            </li>
            <li>
              <input ref={inputRef2} onChange={onChangeValue2} type="text" autoComplete="off" className="text-center" id="kedua" maxLength={1} value={value2}></input><br />
              <p className="posisi">2</p>
            </li>
            <li>
              <input ref={inputRef3} onChange={onChangeValue3} type="text" autoComplete="off" className="text-center" id="ketiga" maxLength={1} value={value3}></input><br />
              <p className="posisi">3</p>
            </li>
            <li>
              <input ref={inputRef4} onChange={onChangeValue4} type="text" autoComplete="off" className="text-center" id="keempat" maxLength={1} value={value4}></input><br />
              <p className="posisi">4</p>
            </li>
            <li>
              <input ref={inputRef5} onChange={onChangeValue5} type="text" autoComplete="off" className="text-center" id="kelima" maxLength={1} value={value5}></input><br />
              <p className="posisi">5</p>
            </li>
          </ul>
        </div>
      </form>
      <div className="input-tidak-spesifik text-start">
        <div className="input-tidak-spesifik input-termasuk my-3">
          <form>
            <label htmlFor="termasuk" className="label-input-tidak-spesifik">termasuk huruf :</label><br />
            <input type="text" autoComplete="off" id="termasuk" name="termasuk" placeholder="a, j, y"></input><br />
          </form>
        </div>
        <div className="input-tidak-termasuk my-3">
          <form>
            <label htmlFor="tidakTermasuk" className="label-input-tidak-spesifik">tidak termasuk huruf  :</label><br />
            <input type="text" autoComplete="off" id="tidak-termasuk" name="tidakTermasuk" placeholder="d, k, t"></input><br />
          </form>
        </div>
        <div className="form-text mt-0 mb-4">pisahkan dengan koma</div>
      </div>
    </div>
  )
}