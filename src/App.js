import {useState} from "react";
import { File, Object } from 'parse'

function App() {

  const [file, setFile] = useState('')
  const [input, setInput] = useState('')

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('🥎: ', input)
    console.log('🛩: ', file)
    if (file && input) {
      add(input, file)
    } else {
      alert('Field not filled')
    }
  }

  const add = (input, file) => {
    let parseFile = new File('ava.png', file );

    let Photo = Object.extend('card')

    let photo = new Photo()

    photo.set('objectId', 'yQY4GsvMVw')


    photo.set('name', 'test')
    photo.set('image', parseFile)

    photo.save().then(function() {
      alert('Good')
    }, function(error) {
      console.log( '📌:',error,'🌴 🏁')
    });
  }

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <form className='flex flex-col gap-4 w-1/3' onSubmit={handleSubmit}>
          <input
              type="text" placeholder='name'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='p-1 rounded'
          />

          <input
              name="image"
              type="file"
              onChange={handleFile}
          />
          <button type="submit" className='p-1 bg-teal-600 w-[150px] text-white rounded hover:bg-teal-500'>Отправить</button>
        </form>
      </div>
  );
}

export default App;
