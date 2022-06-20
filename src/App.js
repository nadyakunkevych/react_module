import Character from './components/Character'

function App() {
  return (
    <div>

    <Character
    name={'Homer Simpson'}
    background={'Homer Jay Simpson, formerly known as Max Power,[2] is the father of the Simpson family. He is overweight, lazy, and ignorant, but also strongly devoted to his wife and children.'}
    picture={'https://allenshadow.files.wordpress.com/2009/12/homersimpson_small1.jpg'}
    />

      <Character
          name='Marge Simpson'
          background='Marge is known for her raspy voice which sounds a lot like the real-life voice of.'
          picture='https://i.pinimg.com/474x/c6/e5/27/c6e5277958f4e3f6aab0272db34d467d.jpg'
      />

      <Character
          name='Bart Simpson'
          background='The son and original protagonist of the show in its first couple seasons. Though the oldest child of the family, Bart is a self-professed hellion and mischief-making
           little punk, though not incapable of good things for the right reason.'
          picture='https://static.tvtropes.org/pmwiki/pub/images/bart_simpson_2.png'
      />

      <Character
          name='Lisa Simpson'
          background='She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age.
          Not to everyone surprise, she is also the moral center of her family.'
          picture='https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
      />

      <Character
          name='Maggie Simpson'
          background='Margaret Lenny "Maggie" Simpson is the youngest child of Marge and Homer,
          and sister to Bart and Lisa. She is almost
          always seen sucking on her pacifier and, when she walks, she trips over her clothing and falls on her face..'
          picture='https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png'
      />



    </div>

  );
}

export default App;
