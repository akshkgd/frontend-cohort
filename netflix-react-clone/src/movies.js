const data = [
    {
        "id": 1,
        "title": "Avengers",
        "slug": "avengers",
        "genre": "Action",
        "year": "2012",
        "img": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 8.0,
        "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        "director": "Joss Whedon",
        "youtube_trailer": "https://www.youtube.com/watch?v=eOrNdBpGMv8"
      },
      {
        "id": 2,
        "title": "Avengers: Infinity War",
        "slug": "avengers-infinity-war",
        "genre": "Action",
        "year": "2018",
        "img": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 8.4,
        "actors": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        "director": "Anthony Russo, Joe Russo",
        "youtube_trailer": "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
      },
      {
        "id": 3,
        "title": "Avengers: Endgame",
        "slug": "avengers-endgame",
        "genre": "Action",
        "year": "2019",
        "img": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 8.4,
        "actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        "director": "Anthony Russo, Joe Russo",
        "youtube_trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c"
      },
      {
        "id": 4,
        "title": "Avengers: Age of Ultron",
        "slug": "avengers-age-of-ultron",
        "genre": "Action",
        "year": "2015",
        "img": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 7.3,
        "actors": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        "director": "Joss Whedon",
        "youtube_trailer": "https://www.youtube.com/watch?v=tmeOjFno6Do"
      },
      {
        "id": 5,
        "title": "Captain Marvel",
        "slug": "captain-marvel",
        "genre": "Action",
        "year": "2019",
        "img": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Captain Marvel is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 6.8,
        "actors": ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn"],
        "director": "Anna Boden, Ryan Fleck",
        "youtube_trailer": "https://www.youtube.com/watch?v=Z1BCujX3pw8"
      },
      {
        "id": 6,
        "title": "Thor",
        "slug": "thor",
        "genre": "Action",
        "year": "2011",
        "img": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Thor is a 2011 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 7.0,
        "actors": ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
        "director": "Kenneth Branagh",
        "youtube_trailer": "https://www.youtube.com/watch?v=JOddp-nlNvQ"
      },
      {
        "id": 7,
        "title": "Thor: Ragnarok",
        "slug": "thor-ragnarok",
        "genre": "Action",
        "year": "2017",
        "img": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "description": "Thor: Ragnarok is a 2017 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        "imdb_rating": 7.9,
        "actors": ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
        "director": "Taika Waititi",
        "youtube_trailer": "https://www.youtube.com/watch?v=ue80QwXMRHg"
      },
      {
        "id": 8,
        "title": "The Dark Knight",
        "slug": "the-dark-knight",
        "genre": "Action",
        "year": "2008",
        "img": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "imdb_rating": 9.0,
        "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "director": "Christopher Nolan",
        "youtube_trailer": "https://www.youtube.com/watch?v=EXeTwQWrcwY"
      },

        // {
        //   "id": 30,
        //   "title": "Dilwale Dulhania Le Jayenge",
        //   "slug": "dilwale-dulhania-le-jayenge",
        //   "genre": "Romance",
        //   "year": "1995",
        //   "img": "https://m.media-amazon.com/images/M/MV5BMDQ2ZmE2NTMtZDE3NC00YzFjLWJhNmEtMDEzMTI5ZjU2ZGM0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg",
        //   "description": "Raj, a young man, falls in love with Simran, but they both belong to different cultural backgrounds. Will their love be able to overcome the societal pressure?",
        //   "imdb_rating": 8.1,
        //   "actors": ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
        //   "director": "Aditya Chopra",
        //   "youtube_trailer": "https://www.youtube.com/watch?v=1U9SpwJ9TCs"
        // },
        {
          "id": 31,
          "title": "3 Idiots",
          "slug": "3-idiots",
          "genre": "Comedy",
          "year": "2009",
          "img": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
          "description": "In college, Farhan and Raju form a great bond with Rancho due to his positive and refreshing outlook to life. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.",
          "imdb_rating": 8.4,
          "actors": ["Aamir Khan", "Madhavan", "Sharman Joshi"],
          "director": "Rajkumar Hirani",
          "youtube_trailer": "https://www.youtube.com/watch?v=K0eDlFX9GMc"
        },
        {
          "id": 32,
          "title": "Lagaan",
          "slug": "lagaan",
          "genre": "Drama",
          "year": "2001",
          "img": "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
          "description": "In 1890s India, an arrogant British commander challenges the harshly taxed residents of Champaner to a high-stakes cricket match.",
          "imdb_rating": 8.1,
          "actors": ["Aamir Khan", "Gracy Singh", "Rachel Shelley"],
          "director": "Ashutosh Gowariker",
          "youtube_trailer": "https://www.youtube.com/watch?v=Kw3l59Rkrq4"
        },
        // {
        //   "id": 33,
        //   "title": "Sholay",
        //   "slug": "sholay",
        //   "genre": "Action",
        //   "year": "1975",
        //   "img": "https://m.media-amazon.com/images/M/MV5BOWQ0YTUzYzItYjI0MC00OTZmLWE1MWQtY2EzMzU2MTlmMmJjXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SX300.jpg  ",
        //   "description": "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
        //   "imdb_rating": 8.2,
        //   "actors": ["Dharmendra", "Sanjeev Kumar", "Hema Malini"],
        //   "director": "Ramesh Sippy",
        //   "youtube_trailer": "https://www.youtube.com/watch?v=hLhzpe3_V_g"
        // },
        {
          "id": 34,
          "title": "PK",
          "slug": "pk",
          "genre": "Comedy",
          "year": "2014",
          "img": "//www.tallengestore.com/cdn/shop/products/7381746122932A_60e870c7-fb41-40bb-9bfc-cffb7c6a05e8.jpg?v=1683929494",
          "description": "A stranger in the city asks questions no one has asked before. Known only by his initials, P.K.'s innocent questions and childlike curiosity will take him on a journey of love, laughter and letting go.",
          "imdb_rating": 8.1,
          "actors": ["Aamir Khan", "Anushka Sharma", "Sanjay Dutt"],
          "director": "Rajkumar Hirani",
          "youtube_trailer": "https://www.youtube.com/watch?v=SOXWc32k4zA"
        },
        
        
        {
          "id": 37,
          "title": "Queen",
          "slug": "queen",
          "genre": "Comedy",
          "year": "2013",
          "img": "https://m.media-amazon.com/images/M/MV5BNWYyOWRlOWItZWM5MS00ZjJkLWI0MTUtYTE3NTI5MDAwYjgyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
          "description": "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets canceled.",
          "imdb_rating": 8.2,
          "actors": ["Kangana Ranaut", "Rajkummar Rao", "Lisa Haydon"],
          "director": "Vikas Bahl",
          "youtube_trailer": "https://www.youtube.com/watch?v=KGC6vl3lzf0"
        }
      
       
    
    ]

      export default data;