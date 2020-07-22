"use strict";

var pageIndex = get('.page--index');
var pageBookmark = get('.page--bookmarks');
var pageCreate = get('.page--create');
var pageProfile = get('.page--profile');
var headline = get('h1');
var buttonAnswer = get('.card__button--answer1');
var answer = get('.card__answer1'); // forms

var inputsForm = getAll('textarea,input');
var form = get('.form');
var buttonDark = get('.darkmode');
var styleSheet = get('.stylesheet'); // Navigation links

var navLinks = getAll('nav > div');
var navBookmark = get('.nav__bookmarks');
var navIndex = get('.nav__index');
var navCreate = get('.nav__create');
var navProfile = get('.nav__profile');
var bookmarks = getAll('.card__bookmark'); // Add Event Listeners

navIndex.addEventListener('click', showPage(pageIndex, 'Quiz-App'));
navBookmark.addEventListener('click', showPage(pageBookmark, 'Bookmarks'));
navCreate.addEventListener('click', showPage(pageCreate, 'Create'));
navProfile.addEventListener('click', showPage(pageProfile, 'Profile'));
buttonDark.addEventListener('click', function () {
  return styleSheet.href = 'dark.css';
});
buttonAnswer.addEventListener('click', function () {
  answer.classList.toggle('d-none');

  if (buttonAnswer.textContent === 'Show answer') {
    buttonAnswer.textContent = 'Hide answer';
  } else {
    buttonAnswer.textContent = 'Show answer';
  }
});
bookmarks.forEach(function (element) {
  return element.addEventListener('click', function () {
    return toggleBookmarkActive(element);
  });
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  resetForm();
}); // functions

function resetForm() {
  inputsForm.forEach(function (element) {
    return element.value = '';
  });
}

function showPage(pageName, headline) {
  return function () {
    hideAllPages();
    pageName.classList.remove('d-none');
    changeHeadline(headline);
  };
}

function changeHeadline(string) {
  headline.textContent = string;
}

function hideAllPages() {
  pageIndex.classList.add('d-none');
  pageBookmark.classList.add('d-none');
  pageCreate.classList.add('d-none');
  pageProfile.classList.add('d-none');
}

function get(selector) {
  return document.querySelector(selector);
}

function getAll(selector) {
  return document.querySelectorAll(selector);
}

function toggleBookmarkActive(element) {
  element.classList.toggle('card__bookmark__active');
  element.classList.toggle('card__bookmark--inactive');
} //  function switchPage(pageName) {
//    return () => {
//      navLinks.forEach(
//        element.classList.add('d-none')
//        pageName.classList.remove('d-none')
//      )
//  }
//  }