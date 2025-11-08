// Search posts filtering
function searchPosts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const posts = document.querySelectorAll('.posts article.post, .posts article.post-card');

  posts.forEach((post) => {
    let title = post.querySelector('h3, h4')?.textContent.toLowerCase();

    if (title && title.includes(query)) {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  });
}

// Comment submission with dynamic addition
function submitComment(event, commentSectionId) {
  event.preventDefault();
  const form = event.target;
  const textarea = form.querySelector('textarea');
  const commentText = textarea.value.trim();

  if (commentText) {
    const commentContainer = document.getElementById(commentSectionId);
    const newComment = document.createElement('p');
    newComment.textContent = commentText;
    commentContainer.appendChild(newComment);
    textarea.value = '';
  } else {
    alert('Please enter a comment before submitting.');
  }
}

// Feedback submission placeholder
function submitFeedback(event, feedbackSectionId) {
  event.preventDefault();
  const form = event.target;
  const textarea = form.querySelector('textarea');
  const feedbackText = textarea.value.trim();

  if (feedbackText) {
    alert('Thank you for your feedback!');
    textarea.value = '';
  } else {
    alert('Please enter feedback before submitting.');
  }
}

// Contact guide placeholder function
function contactGuide(guideName) {
  alert(`You can contact ${guideName} via email or social media! (Feature to be implemented)`);
}

// Filter blog posts by category
function filterByCategory(category) {
  const posts = document.querySelectorAll('.posts article.post');
  posts.forEach((post) => {
    if (post.dataset.category === category || category === 'All') {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  });
}

// Filter blog posts by tag
function filterByTag(tag) {
  const posts = document.querySelectorAll('.posts article.post');
  posts.forEach((post) => {
    const tags = post.dataset.tags.split(',');
    if (tags.includes(tag) || tag === 'All') {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  });
}

// User Management placeholder
function openCreateUserForm() {
  alert('Open create user form (To be implemented)');
}

// Content Management placeholder
function openCreatePostForm() {
  alert('Open create post form (To be implemented)');
}

// Newsletter subscription handling
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for subscribing to our newsletter!');
  newsletterForm.reset();
});

// Travel Story submission
const storyForm = document.getElementById('storyForm');
storyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const textarea = storyForm.querySelector('textarea');
  const storyText = textarea.value.trim();

  if (storyText) {
    const storiesContainer = document.getElementById('storiesContainer');
    const newStory = document.createElement('article');
    newStory.classList.add('story');
    newStory.innerHTML = `
      <h4>Guest Story</h4>
      <p>${escapeHtml(storyText)}</p>
      <p>– by Guest</p>
    `;
    storiesContainer.prepend(newStory);
    textarea.value = '';
    alert('Thank you for sharing your travel story!');
  } else {
    alert('Please write your story before submitting.');
  }
});

// Helper function to safely escape HTML input
function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}
