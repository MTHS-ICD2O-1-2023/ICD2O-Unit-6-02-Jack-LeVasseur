// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

let clicks = parseInt(localStorage.getItem("click-counter")) || 0

function updateCookieCount() {

  document.getElementById("click-count").innerHTML = clicks
}

function myButtonClicked() {
  clicks += 1

  // Update the HTML element with the updated clicks value
  document.getElementById("click-count").innerHTML = clicks

  // Update the clicks value in local storage
  localStorage.setItem("click-counter", clicks)
}
