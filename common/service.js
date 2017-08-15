var BaseURL = "https://api.douban.com/v2/";
 let DouBan_APIS = {
  book_search:BaseURL + 'book/search',
  book_detail_id:BaseURL + "book/",
  movie_search:BaseURL + "movie/search"

}

  module.exports  = DouBan_APIS;
