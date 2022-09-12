<?php
include("broilerplate.php");
?>

<main>
    <div id="btns">
        <div id="dropdown">
            <select name="filter" id="filter">
                <option value="allDogs" id="allDogs">All</option>
                <option value="husky" id="husky">Husky</option>
                <option value="maltese" id="maltese">Maltese</option>
                <option value="frenchdog" id="frenchdog">French Dog</option>
            </select>
            <button id="filterbtn" onclick="filterDog()">Filter</button>
        </div>

        <div id="search">
            <input id="searchbox" type="text" size="20" placeholder="Search here!">
            <button id="searchbtn" type="btn">Search</button>
        </div>
    </div>

    <div id="gridcontainer">

        <div class="griditem maltese">
            <div class="imagebox">
                <img src="" class="imgdog" alt="Shanie">
            </div>
        </div>
        <div class="griditem maltese">
            <h2 class="puppyname"></h2>
            <h4 class="puppybirthyear"></h4>
            <p class="puppydescription"></p>
            <p class="puppyprice"></p>
        </div>

        <div class="griditem husky">
            <div class="imagebox">
                <img src="" class="imgdog" alt="Soda">
            </div>
        </div>
        <div class="griditem husky">
            <h2 class="puppyname"></h2>
            <h4 class="puppybirthyear"></h4>
            <p class="puppydescription"></p>
            <p class="puppyprice"></p>
        </div>

        <div class="griditem frenchdog">
            <div class="imagebox">
                <img src="" class="imgdog" alt="Edison">
            </div>
        </div>
        <div class="griditem frenchdog">
            <h2 class="puppyname"></h2>
            <h4 class="puppybirthyear"></h4>
            <p class="puppydescription"></p>
            <p class="puppyprice"></p>
        </div>

        <div class="griditem husky">
            <div class="imagebox">
                <img src="" class="imgdog" alt="Siberian">
            </div>
        </div>
        <div class="griditem husky">
            <h2 class="puppyname"></h2>
            <h4 class="puppybirthyear"></h4>
            <p class="puppydescription"></p>
            <p class="puppyprice"></p>
        </div>

        <div class="griditem frenchdog">
            <div class="imagebox">
                <img src="" class="imgdog" alt="Eddie">
            </div>
        </div>
        <div class="griditem frenchdog">
            <h2 class="puppyname"></h2>
            <h4 class="puppybirthyear"></h4>
            <p class="puppydescription"></p>
            <p class="puppyprice"></p>
        </div>

        <div class="griditem maltese">
            <div class="imagebox">
                <img src="" class="imgdog" alt="Muaji">
            </div>
        </div>
        <div class="griditem maltese">
            <h2 class="puppyname"></h2>
            <h4 class="puppybirthyear"></h4>
            <p class="puppydescription"></p>
            <p class="puppyprice"></p>
        </div>
    </div>
</main>

<footer>
    <hr id="line2">
    <div id="copyright">
        <p>© Copy right 2022 Paws. All rights reserved.</p>
    </div>
</footer>
</body>

</html>