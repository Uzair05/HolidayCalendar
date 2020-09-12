# Holiday Calendar


## About
This is a javascript file which aims in creating a 19in x 6in calendar frame which highlights all the public holidays in the chosen location (Hong Kong).

## Usage
Add the script 
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="./assets/css/HolidayStrap.css"/>
<script src="./assets/js/HolidayStrap.js"></script>
```
to the header of your html page and create a `div` element with id `id="holidayBOX"` in your desired location.

This will create a 19*6 in frame.

## Dependancies

The js file is dependant on jQuery to run properly.

## Further Improvements.
* It relies on a hack by calling for each day individually. This is due to account constraints of the chosen API.
    * I plan to fix this by modifying the program to allow user to opt for the paid package.
* It relies on jQuery to make api calls.
    * I plan to rewrite the program in Vanilla Js so that I can remove the jQuery dependancy.

