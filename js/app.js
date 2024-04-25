let title = document.querySelector('#title')
let author = document.querySelector('#author')
let year = document.querySelector('#year')
let bookList = document.querySelector('#bookList')
let btn = document.querySelector('.btn')

let books = []

function newBook(){
    let newTitle = title.value
    let newAuthor = author.value
    let newYear = year.value
    if (newTitle === '' || newAuthor === '' || newYear === '') {
        alert('Please fill all the required fields')

    }else{
        let newBookobj = {
            title: newTitle,
            author: newAuthor,
            year: newYear,
            id: books.length + 1
        }
        console.log(newBookobj)
        books.push(newBookobj)
        removeInputs()
        addBookToLocalStorage(books)
    }
}

function removeInputs(){
    title.value = ''
    author.value = ''
    year.value = ''
}

function addBookToLocalStorage(books){
    localStorage.setItem('books', JSON.stringify(books))
    generateNewBook(books)
}

function generateNewBook(books){
    bookList.innerHTML = ''
    books.forEach(function(book){
        let newtr = document.createElement('tr')
        let newthTitle = document.createElement('th')
        newthTitle.innerHTML = book.title
        let newthAuthor = document.createElement('th')
        newthAuthor.innerHTML = book.author
        let newthYear = document.createElement('th')
        newthYear.innerHTML = book.year

        newtr.append(newthTitle, newthAuthor, newthYear)
        console.log(newtr)
        bookList.append(newtr)

    })
}

function getBookFromLocalStorage(){
    let localStorageBooks = JSON.parse(localStorage.getItem('books'))
    if (localStorageBooks){
        books = localStorageBooks
        generateNewBook(books)

    }
}


btn.addEventListener('click', function(event){
    event.preventDefault()
    newBook()
})

window.addEventListener('load', getBookFromLocalStorage)