class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    // here this means our class
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    // console.log(queryCopy);
    //  Remove some fields for cateogry
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);
    let queryStr = JSON.stringify(queryCopy);
    queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // console.log(queryCopy);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  pagination(resultsPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const Skip = resultsPerPage * (currentPage - 1);
    this.query = this.query.limit(resultsPerPage).skip(Skip);
    return this;
  }
}

module.exports = ApiFeatures;
