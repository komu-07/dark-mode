const toggleBtn = document.querySelector('.btn');
const container = document.querySelector('.articles');
const time = new moment();

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
const articleData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return (data = `<article class="post" >
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>
          ${snippet}
        </p>
      </article>`);
  })
  .join('');
container.innerHTML = articleData;
