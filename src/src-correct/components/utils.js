const paginate = (users) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(users.length / itemsPerPage);

  const newUsers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });
  return newUsers;
};

export default paginate;
