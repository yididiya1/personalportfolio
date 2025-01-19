'use client';

import { Flashcard } from "react-quizlet-flashcard";

const cards = [
  {
    "id": 1,
    "frontHTML": "Abate",
    "backHTML": "<div><p>To reduce in amount, degree, or severity</p><p>As the hurricane's force abated, the winds dropped and the sea became calm.</p></div>"
  },
  {
    "id": 2,
    "frontHTML": "Abscond",
    "backHTML": "<div><p>To leave secretly</p><p>The patron absconded from the restaurant without paying his bill by sneaking out the back door.</p></div>"
  },
  {
    "id": 3,
    "frontHTML": "Abstain",
    "backHTML": "<div><p>To choose not to do something</p><p>During Lent, practicing Catholics abstain from eating meat.</p></div>"
  },
  {
    "id": 4,
    "frontHTML": "Abyss",
    "backHTML": "<div><p>An extremely deep hole</p><p>The submarine dove into the abyss to chart the previously unseen depths.</p></div>"
  },
  {
    "id": 5,
    "frontHTML": "Adulterate",
    "backHTML": "<div><p>To make impure</p><p>The restaurateur made his ketchup last longer by adulterating it with water.</p></div>"
  },
  {
    "id": 6,
    "frontHTML": "Advocate",
    "backHTML": "<div><p>To speak in favor of</p><p>The vegetarian advocated a diet containing no meat.</p></div>"
  },
  {
    "id": 7,
    "frontHTML": "Aesthetic",
    "backHTML": "<div><p>Concerning the appreciation of beauty</p><p>Followers of the aesthetic movement regarded the pursuit of beauty as the only true purpose of art.</p></div>"
  },
  {
    "id": 8,
    "frontHTML": "Aggrandize",
    "backHTML": "<div><p>To increase in power, influence, and reputation</p><p>The supervisor sought to aggrandize himself by claiming that the achievements of his staff were actually his own.</p></div>"
  },
  {
    "id": 9,
    "frontHTML": "Alleviate",
    "backHTML": "<div><p>To make more bearable</p><p>Taking aspirin helps to alleviate a headache.</p></div>"
  },
  {
    "id": 10,
    "frontHTML": "Amalgamate",
    "backHTML": "<div className'bg-red-500'><p>To combine; to mix together</p><p>Giant Industries amalgamated with Mega Products to form Giant-Mega Products Incorporated.</p></div>",
  }
];


const FlashCardView = () => {
  return (
    <div className="bg-white flex justify-center items-center h-[100vh]">
     {
      cards.map((item,index) => (
        <Flashcard 
          frontHTML={<p>{item.frontHTML}</p>}
          backHTML={<p>{item.backHTML}</p>}
         
        />
      )) 
    }
    </div>
  )
}

export default FlashCardView