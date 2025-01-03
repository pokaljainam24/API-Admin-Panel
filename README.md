﻿# API-Admin-Panel

# Dog Breeds Image Viewer

This project fetches and displays a list of dog breeds and their corresponding images using the [Dog CEO API](https://dog.ceo/dog-api/). It includes a dropdown for breeds and sub-breeds, and while images are being fetched.

## Features

- **Breed Dropdown:**
  - Dropdown for breeds with sub-breeds.
  - Clickable breed names for breeds without sub-breeds.

- **Image Viewer:**
  - Displays all images for the selected breed or sub-breed.
  - Images are lazy-loaded for better performance.

- **Profile Dropdown:**
  - Simulates a user profile dropdown with actions.

## API Used

The application uses the [Dog CEO API](https://dog.ceo/dog-api/) to fetch the list of breeds and their images.

## Setup and Usage

1. Clone the repository or copy the provided code.
2. Include the HTML structure for the `leftnav` and `rightnav` containers in your HTML file:

```html
<div id="breed-name"></div>
<div id="breed-image"></div>
```

3. Add the dropdown for user actions:

```html
<div id="userInfoDropdown">Profile</div>
<div id="profileDropdown" class="dropdown-content">
    <a href="#settings">Settings</a>
    <a href="#logout">Logout</a>
</div>
```

5. Add the JavaScript code from this repository.

6. Open the HTML file in a browser.

## How It Works

1. Fetches the list of breeds from the Dog CEO API.
2. Populates the dropdown or clickable list based on the fetched data.
3. Fetches and displays images for the selected breed.
4. Shows a loader animation until all images are loaded.

## Example Screenshot

![image](https://github.com/user-attachments/assets/d223ece2-e210-4e9a-902c-aa427ccb5cfe)

## Visit Page**
[Visit My Dog-Api-Admin-Panel.....🐩🐩🐩🐩](https://dog-api-admin-panel-827cf0.netlify.app)


## Customization

- Replace the spinner loader with a custom dog-themed loader graphic.
- Style the image grid and dropdown to match your design preferences.
- Extend functionality with favorite breeds or search.


