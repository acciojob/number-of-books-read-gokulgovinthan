const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  
  const numberOfBooksRead = () => {
    let a=0;
     library.forEach(function(library){
        if(library.readingStatus){
            a++;
        }
     })
     return a
  };
  
  // Do not change the code below
  
  alert(numberOfBooksRead());
  