let Btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    person: ` Oscar Wilde`
}, {
    quote: "That it will never come again is what makes life so sweet.",
    person: ` Emily Dickinson`
}, {
    quote: "It is never too late to be what you might have been.",
    person: ` George Eliot`
}, {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: ` Ralph Waldo Emerson`
}, {
    quote: "All the world's a stage, and all the men and women merely players.",
    person: ` William Shakespeare`
}, {
    quote: "Self-awareness and self-love matter. Who we are is how we lead.",
    person: ` Brene Brown`
}, {
    quote: "Life is tough my darling, but so are you.",
    person: ` Stephanie Bennett Henry`
}, {
    quote: "Don't let your happiness depend on something you may lose.",
    person: ` C.S. Lewis`
}, {
    quote: "Let me live, love, and say it well in good sentences.",
    person: ` Sylvia Plath`
}, {
    quote: "Be kind, for everyone you meet is fighting a hard battle.",
    person: ` Plato`
}, {
    quote: "Unable are the loved to die for love is immortality.",
    person: ` Emily Dickinson`
}
]

Btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = "-" +quotes[random].person;
})

//QUOTE

// 'To live is the rarest thing in the world. Most people exist, that is all.' – Oscar Wilde
// 'That it will never come again is what makes life so sweet.' – Emily Dickinson
// 'It is never too late to be what you might have been.' – George Eliot
// 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' – Ralph Waldo Emerson
// 'Pain is inevitable. Suffering is optional.' – Haruki Murakami
// 'All the world's a stage, and all the men and women merely players.' – William Shakespeare
// 'Be kind, for everyone you meet is fighting a hard battle.' – Plato
// 'Unable are the loved to die for love is immortality.' – Emily Dickinson
// 'Let me live, love, and say it well in good sentences.' – Sylvia Plath
// 'Don't let your happiness depend on something you may lose.' – C.S. Lewis
// 'We are all broken, that's how the light gets in.' – Ernest Hemingway
// 'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.' – Voltaire
// 'Life is tough my darling, but so are you.' – Stephanie Bennett Henry
// // 'Self-awareness and self-love matter. Who we are is how we lead.' – Brene Brown