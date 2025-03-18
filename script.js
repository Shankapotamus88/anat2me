/* General Styles */
body {
    background-color: black;
    color: gray;
    font-family: 'Brush Script MT', cursive;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Anat2me Title */
.title {
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
}

.underline {
    width: 50%;
    border: 2px solid white;
    margin: 10px auto;
}

/* Menu Button */
.menu-container {
    position: absolute;
    top: 20px;
    right: 20px;
}

.menu-button {
    background-color: gray;
    color: black;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
}

/* Dropdown Menu */
.dropdown-menu {
    display: none;
    position: absolute;
    background-color: black;
    border: 1px solid white;
    right: 0;
    top: 40px;
    min-width: 150px;
    z-index: 1000;
}

.dropdown-menu a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px;
    text-align: left;
}

.dropdown-menu a:hover {
    background-color: gray;
}
