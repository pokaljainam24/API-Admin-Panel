const leftnav = document.getElementById('breed-name');
const rightnav = document.getElementById('breed-image');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())

    .then(data => {
        const breeds = data.message;
        console.log(breeds);

        leftnav.innerHTML = "";

        for (const breed in breeds) {
            if (breeds[breed].length > 0) {
                // Create a div for breeds with sub-breeds
                let dropdown = document.createElement('div');
                let select = document.createElement('select');

                // Add the main breed as the first option
                let mainOption = document.createElement('option');
                mainOption.textContent = breed;
                mainOption.value = breed;
                select.appendChild(mainOption);

                // Add sub-breeds as additional options
                breeds[breed].forEach(subBreed => {
                    let subOption = document.createElement('option');
                    subOption.textContent = `${subBreed} (${breed})`;
                    subOption.value = `${breed} ${subBreed}`;
                    select.appendChild(subOption);
                });

                // Attach change event listener to the dropdown
                select.addEventListener('change', (event) => {
                    const breedValue = event.target.value;

                    // Split breed and sub-breed if necessary
                    const [breed, subBreed] = breedValue.split(' ');
                    const formattedBreed = subBreed ? `${breed}/${subBreed}` : breed;

                    console.log(`Selected breed: ${formattedBreed}`);
                    fetchAllBreedImages(formattedBreed);
                });

                dropdown.appendChild(select);
                leftnav.appendChild(dropdown);
            } else {
                // Create a div for breeds without sub-breeds
                let breedDiv = document.createElement('div');
                breedDiv.textContent = breed;

                // Attach click event listener to the breed name
                breedDiv.addEventListener('click', () => {
                    console.log(`Clicked breed: ${breed}`);
                    fetchAllBreedImages(breed);
                });

                leftnav.appendChild(breedDiv);
            }
        }
    })
    .catch(error => console.error('Error:', error));

// Function to fetch and display all breed images
function fetchAllBreedImages(breed) {
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(`Images for ${breed}:`, data.message);

            // Clear the rightnav area
            rightnav.innerHTML = '';

            // Display all images
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.loading = "lazy";
                img.alt = `Image of ${breed}`;
                img.style.maxWidth = '200px';
                img.style.margin = '5px';
                rightnav.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching breed images:', error));
}

// RIght Hader dropdown //

const userInfoDropdown = document.getElementById('userInfoDropdown');
const profileDropdown = document.getElementById('profileDropdown');

userInfoDropdown.addEventListener('click', function (e) {
    e.stopPropagation();
    profileDropdown.classList.toggle('show');
});

document.addEventListener('click', function (e) {
    if (!userInfoDropdown.contains(e.target)) {
        profileDropdown.classList.remove('show');
    }
});

profileDropdown.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const action = this.getAttribute('href').substring(1);
        showNotification('info', `${action.charAt(0).toUpperCase() + action.slice(1)} action triggered`);
        profileDropdown.classList.remove('show');
    });
});
