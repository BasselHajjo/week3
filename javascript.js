let books = [
    {"title":"one_hundred_years_of_solitude", "language":"English", "author":"Gabriel Garcia Marquez", "year":1967, "quote":"&ldquo; It's enough for me to be sure that you and I exist at this moment. &rdquo;","Image":"https://images.gr-assets.com/books/1327881361l/320.jpg"},

    {"title":"love_in_the_time_of_cholera", "language":"English", "author":"Gabriel Garcia Marquez", "year":1985, "quote":"&ldquo; He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves. &rdquo;","Image":"https://images.gr-assets.com/books/1327124987l/9712.jpg"},

    {"title":"the_da_vinci_code", "language":"English", "author":"Dan Brown", "year":2006, "quote":"&ldquo; Men go to far greater lengths to avoid what they fear than to obtain what they desire. &rdquo;","Image":"https://images.gr-assets.com/books/1303252999l/968.jpg"},

    {"title":"the_lost_symbol", "language":"English", "author":"Dan Brown", "year":2009, "quote":"&ldquo; Great minds are always feared by lesser minds. &rdquo;","Image":"https://images.gr-assets.com/books/1358274396l/6411961.jpg"},

    {"title":"war_and_peace", "language":"Russian", "author":"Leo Tolstoy", "year":1869, "quote":"&ldquo; We can know only that we know nothing. And that is the highest degree of human wisdom. &rdquo;","Image":"https://images.gr-assets.com/books/1413215930l/656.jpg"},

    {"title":"anna_karenina", "language":"Russian", "author":"Leo Tolstoy", "year":1878, "quote":"&ldquo; All happy families are alike; each unhappy family is unhappy in its own way. &rdquo;","Image":"https://media1.britannica.com/eb-media/82/175382-004-B972312A.jpg"},

    {"title":"the_alchemist", "language":"English", "author":"Paulo Coelho", "year":1993, "quote":"&ldquo; And, when you want something, all the universe conspires in helping you to achieve it. &rdquo;","Image":"https://images.gr-assets.com/books/1483412266l/865.jpg"},

    {"title":"pride_and_prejudice", "language":"English", "author":"Jane Austen", "year":2014, "quote":"&ldquo; I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library. &rdquo;","Image":"https://images.gr-assets.com/books/1486891493l/23332761.jpg"},

    {"title":"eat_pray_love", "language":"English", "author":" Elizabeth Gilbert", "year":2007, "quote":"&ldquo; This is a good sign, having a broken heart. It means we have tried for something. &rdquo;","Image":"https://images.gr-assets.com/books/1503066414l/19501.jpg"}
];

let container = document.createElement("div");
document.querySelector("body").appendChild(container)
container.id = "contain";


function createNewUL(){
    let i = 0;
    while(i<books.length){
        let books_list = document.createElement("ul");
        document.getElementById("contain").appendChild(books_list)
        books_list.id = books[i].title;
        i++
    }
}

createNewUL();

function newListItems(){
    for ( let i = 0 ; i < books.length ; i++){
        let j = 0;
        while(j<books.length){
            let bookTitle = document.createElement("h3");
            document.getElementById(books[i].title).appendChild(bookTitle)
            bookTitle.className = "title";
            bookTitle.innerHTML=books[i].title.replace(/_/g," ");
            
            let bookAuthor = document.createElement("li");
            document.getElementById(books[i].title).appendChild(bookAuthor)
            bookAuthor.className = "author";
            bookAuthor.innerHTML=books[i].author;
            
            let bookYear = document.createElement("li");
            document.getElementById(books[i].title).appendChild(bookYear)
            bookYear.className = "year";
            bookYear.innerHTML=books[i].year;
            
            let bookLang = document.createElement("li");
            document.getElementById(books[i].title).appendChild(bookLang)
            bookLang.className = "lang";
            bookLang.innerHTML = books[i].language;
            
            let bookImg = document.createElement("img");
            document.getElementById(books[i].title).appendChild(bookImg)
            bookImg.className = "img";
            bookImg.src = books[i].Image;
            bookImg.innerHTML = books[i].Image;
            
            let bookQuote = document.createElement("li");
            document.getElementById(books[i].title).appendChild(bookQuote)
            bookQuote.className = "quote";
            bookQuote.innerHTML = books[i].quote;
            i++;
        }
    }
}


newListItems();

